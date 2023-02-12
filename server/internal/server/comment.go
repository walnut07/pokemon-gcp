package server

import (
	"context"
	"fmt"
	"net/http"
	"os"

	firebase "firebase.google.com/go"
	"firebase.google.com/go/db"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	"google.golang.org/api/option"
)

var DATABASE_URL = "https://pokemon-8bfaf-default-rtdb.firebaseio.com/"

func submitComment(ginCtx *gin.Context) {
	req := new(PostCommentReq)
	if err := ginCtx.Bind(req); err != nil {
		ginCtx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"err": err.Error()})
		return
	}

	client := getDbClient()
	ref := client.NewRef("comments/" + fmt.Sprint(req.PokemonId))
	if _, err := ref.Push(context.TODO(), Comment{UnixTime: req.UnixTime, Content: req.Content}); err != nil {
		panic(fmt.Sprintf("Error adding data to firebase: %v", err))
	}

	ginCtx.JSON(http.StatusOK, "comment submitted")
}

func getComments(ginCtx *gin.Context) {
	id := ginCtx.Query("id")

	client := getDbClient()
	var comments map[string]interface{}
	ref := client.NewRef("comments/" + fmt.Sprint(id))
	if err := ref.Get(context.TODO(), &comments); err != nil {
		panic(fmt.Sprintf("Error reading data from firebase: %v", err))
	}

	ginCtx.JSON(http.StatusOK, comments)
}

func getDbClient() *db.Client {
	ctx := context.Background()

	// Set up options and config for Firebase
	opt := option.WithCredentialsFile("../../internal/server/pokemon-8bfaf-firebase-adminsdk-d2a2q-11a5a392b1.json")
	if err := godotenv.Load(); err != nil {
		panic(fmt.Sprintf("Error reading env variables: %v", err))
	}
	config := &firebase.Config{DatabaseURL: os.Getenv("DATABASE_URL")}

	// Initialize a firebase App
	app, err := firebase.NewApp(ctx, config, opt)
	if err != nil {
		panic(fmt.Sprintf("Error initializing app: %v", err))
	}

	client, err := app.Database(ctx)
	if err != nil {
		panic(fmt.Sprintf("Error initializing db: %v", err))
	}

	return client
}
