package server

type CommentReq struct {
	PokemonId int64
	UnixTime  int64
	Content   string
}

type Comment struct {
	UnixTime int64
	Content  string
}
