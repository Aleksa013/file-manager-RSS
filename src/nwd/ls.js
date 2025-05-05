import { readdir } from "node:fs/promises"
import { cwd } from "node:process"
import { getLocation } from "../utils.js"


export const getListOfContentDirectory = async() => {
    try{
        const path =cwd()
        const dirs = []
        const files = []
        const content = await readdir(path, { withFileTypes: true})
        content.forEach(item => {   
            item.isFile()?  
            files.push({Name: item.name, Type: 'file'}) : 
            dirs.push({Name:item.name, Type: 'directory'})
            })
        const list = [...dirs.sort((a, b) => a.Name.localeCompare(b.Name)),...(files.sort((a, b) => a.Name.localeCompare(b.Name)))]
        console.table(list)
        getLocation()        
    }catch{
        console.error('Operation failed')
    }
   
}

