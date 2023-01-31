import { Dispatch, SetStateAction } from "react";

import { DoubleDamageFromArray } from "../interface/interface";
import {PokeTypeApi} from "../API/api";

function Input({ setDoubleDamageFrom: setDoubleDamageFrom } : {setDoubleDamageFrom: Dispatch<SetStateAction<DoubleDamageFromArray>>}) {
    const displayDoubleDamageFrom = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const input = document.getElementById('poke-name') as HTMLInputElement;
        const doubleDamageTo = await new PokeTypeApi(input.value).getDoubleDamageFrom();
        setDoubleDamageFrom(doubleDamageTo);
    }

    return (
        <form>
            <label htmlFor="poke-name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pokemon Name</label>
            <input type="text" id="poke-name" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 
                sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                type="submit" onClick={displayDoubleDamageFrom}>
                Search
            </button>
        </form>
    )
}

export default Input;