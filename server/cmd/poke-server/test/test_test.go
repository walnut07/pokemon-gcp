package main

import (
	"net/http"
	"net/http/httptest"
	"poke-server/internal/server"
	"testing"

	"github.com/stretchr/testify/assert"
)

func testTest(t *testing.T) {
	w := httptest.NewRecorder()
	req, _ := http.NewRequest("GET", "/test", nil)
	router := server.SetRouter()
	router.ServeHTTP(w, req)

	assert.Equal(t, 200, w.Code)
	assert.Equal(t, "\"foo\"", w.Body.String())
}
