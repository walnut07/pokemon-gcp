import { CommentReq } from "../interface/interface";
import { PokeServerApi } from "../API/pokeServer";

interface Props {
    pokeId: number | null;
}

const CommentForm:  React.FC<Props> = ({pokeId: pokemonId}) => {
    const pokeServerApi = new PokeServerApi();

    const submitComment = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const textarea = document.getElementById('comment') as HTMLInputElement;
        const req: CommentReq = {pokemonId: pokemonId!, unixTime: new Date().getTime(), content: textarea.value}
        try {
            await pokeServerApi.submitComment(req);
        } catch (e) {
            console.error("some error while posting the comment")
        }
    }


    return (
        <section className="bg-white py-8 lg:py-16">
            <div className="max-w-2xl mx-auto px-4">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg lg:text-2xl font-bold text-gray-900">Discussion</h2> {/* TODO(kurumi): Show the number of comments dynamically */}
                </div>
                <form className="mb-6">
                    <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200">
                        <label htmlFor="comment" className="sr-only">Your comment</label>
                        <textarea id="comment" rows={6}
                            className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none"
                            placeholder="Write a comment..." required></textarea>
                    </div>
                    <button type="submit" onClick={submitComment}
                        className="inline-flex items-center py-2.5 px-4 text-xs font-medium bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 hover:bg-primary-800">
                        Post comment
                    </button>
                </form>
            </div>
        </section>
    )
}

export default CommentForm;
