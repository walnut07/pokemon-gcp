interface DoubleDamageFromObj {
    name: string;
    url: string;
}

export interface DoubleDamageFromArray extends Array<DoubleDamageFromObj>{}

export interface CommentReq {
    pokemonId: number;
    unixTime: number;
    content: string;
}