import { rm , stat } from "node:fs"
import { cwd } from "node:process"
import { getLocation } from "../utils.js"

export const deleteFile = async(path) => {
    try{
       stat(path,{}, (err, stats) => {
        if(stats.isFile()){
            rm(path, (err) => {
                throw new Error('Operation failed')
            })
            getLocation()
        } else {
            throw new Error('Invalid input')
        }
       })
    }catch{
        throw new Error('Operation failed')
    }
}