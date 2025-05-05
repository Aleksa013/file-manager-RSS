import { rm , stat } from "node:fs"
import { cwd } from "node:process"
import { getLocation } from "../utils.js"

export const deleteFile = async(path) => {
    try{
       stat(path,{}, (err, stats) => {
        if(stats.isFile()){
            rm(path, (err) => {
                console.error('Operation failed')
            })
            getLocation()
        } else {
            console.error('Invalid input')
        }
       })
    }catch{
        console.error('Operation failed')
    }
}