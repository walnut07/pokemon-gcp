import { Chip } from "@material-tailwind/react";
import { useEffect } from "react";

function DoubleDamageTo({doubleDamageTo}: {doubleDamageTo: Array<Object>}) {
    useEffect(() => {

        console.log(doubleDamageTo);
    }, [doubleDamageTo])

    return (
        <div className="flex flex-wrap justify-center space-x-2">
            {doubleDamageTo.map((type) => {
                return <Chip value={type['type']}></Chip>
            })}
        </div>
    )
}

export default DoubleDamageTo;