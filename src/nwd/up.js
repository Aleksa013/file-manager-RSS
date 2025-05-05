import { sep } from "node:path";
import { chdir, cwd } from "node:process"
import { getLocation } from "../utils.js"

export const goUp = () => {
    const pathUp = cwd()
    .split(/[\\]/)
    .slice(0, -1)
    .join(sep)
    try {
        chdir(pathUp);
        console.log(`Новый каталог: ${cwd()}`);
        getLocation()
    } catch (err) {
        console.error('Operation failed')
    }
}

