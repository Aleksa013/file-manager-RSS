import { chdir } from "node:process"
import { isAbsolute, resolve } from "node:path"
import { getLocation } from "../utils.js"

export const doCD = (path) => {
    try{
        isAbsolute(path) 
        ?chdir(path)
        :chdir(resolve(path))
        getLocation()
    }catch(error){
        console.error('Operation failed')
    }
}