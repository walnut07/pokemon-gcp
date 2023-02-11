import { CommentReq } from '../interface/interface';
import axios from 'axios';

class WhichPokemonApi {
    private readonly WHICH_SERVER_PATH: string;

    constructor() {
        this.WHICH_SERVER_PATH = 'http://localhost:8080/';
    }

    async submitComment(comment: CommentReq) {
        axios.put(this.WHICH_SERVER_PATH + 'comment', comment);
    }
}

export {WhichPokemonApi as PokeServerApi}