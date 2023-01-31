import { Chip } from "@material-tailwind/react";
import { DoubleDamageFromArray } from "../interface/interface";
import { useEffect } from "react";

function DoubleDamageFrom({doubleDamageTo}: {doubleDamageTo: DoubleDamageFromArray}) {
    useEffect(() => {

        console.log(doubleDamageTo);
    }, [doubleDamageTo])

    return (
        <div className="flex flex-wrap justify-center space-x-2">
            {doubleDamageTo.map((type) => {
                return <Chip value={type['name']}></Chip>
            })}
        </div>
    )
}

export default DoubleDamageFrom;