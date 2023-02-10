package server

func Start() {
	router := SetRouter()
	router.Run(":8080")
}
