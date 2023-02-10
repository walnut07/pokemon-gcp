package server

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func test(ctx *gin.Context) {
	ctx.JSON(http.StatusOK, ("foo"))
}
