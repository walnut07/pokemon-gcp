import { Dispatch, SetStateAction, useEffect } from "react";

import { Comment } from "../interface/interface";
import { PokeServerApi } from "../API/pokeServer";

interface Props {
    pokeId: number | null;
    comments: Comment | null;
    setComments: Dispatch<SetStateAction<Comment | null>>;
}

const Comments:  React.FC<Props> = ({pokeId, comments, setComments}) => {
    useEffect(() => {
        const fetchData = async () => {
            return await new PokeServerApi().getComments(pokeId!);
        }
        fetchData().then(res => setComments(res))
    }, [pokeId])

    return (
        <>
            {comments &&
                // TODO(kurumi): Sort comments by their unix time
                Object.values(comments).map(comment => {
                    return <h3>{comment.Content}</h3> 
                })
            }
        </>
    )

}

export default Comments;