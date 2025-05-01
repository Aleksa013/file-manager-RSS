import { chdir } from "node:process"

export const doCD = (path) => {
    try{
        chdir(path)
    }catch(error){
        throw new Error(`Error: `+error)
    }
}