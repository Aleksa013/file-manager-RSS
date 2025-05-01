import { chdir, cwd } from "node:process"

export const goUp = () => {
    const pathUp = cwd()
    .split('\\')
    .slice(0, -1)
    .join('\\')
    try {
        chdir(pathUp);
        console.log(`Новый каталог: ${cwd()}`);
        console.log(pathUp)
    } catch (err) {
        console.error(`chdir: ${err}`);
    }
}

