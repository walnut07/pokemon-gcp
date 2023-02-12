import { Comment, CommentReq } from '../interface/interface';

import axios from 'axios';

class WhichPokemonApi {
    private readonly WHICH_SERVER_PATH: string;

    constructor() {
        this.WHICH_SERVER_PATH = 'http://localhost:8080/';
    }

    async submitComment(comment: CommentReq) {
        await axios.put(this.WHICH_SERVER_PATH + 'comment', comment);
    }

    async getComments(pokeId: number): Promise<Comment> {
        return await axios.get(this.WHICH_SERVER_PATH + 'comments' + `?id=${pokeId}`).then(res => res.data);
    }
}

export {WhichPokemonApi as PokeServerApi}