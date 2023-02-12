package server

import (
	"net/http"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func SetRouter() *gin.Engine {
	router := gin.Default()

	config := cors.DefaultConfig()
	config.AllowOrigins = []string{"*"} //TODO(kurumi): Allow only appropriate groups
	router.Use(cors.New(config))

	router.PUT("/comment", submitComment)
	router.GET("/comments", getComments)
	router.NoRoute(func(ctx *gin.Context) { ctx.JSON(http.StatusNotFound, gin.H{}) })

	return router
}
