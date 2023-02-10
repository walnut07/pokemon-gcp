import { Chip } from "@material-tailwind/react";
import { DoubleDamageFromArray } from "../interface/interface";
import { useEffect } from "react";

function DoubleDamageFrom({doubleDamageTo}: {doubleDamageTo: DoubleDamageFromArray}) {
    return (
        <div className="flex flex-wrap justify-center space-x-2">
            <span>is weak to</span>
            {doubleDamageTo.map((type) => {
                return <Chip value={type['name']}></Chip>
            })}
        </div>
    )
}

export default DoubleDamageFrom;