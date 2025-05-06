import { rename } from 'node:fs/promises';


export const renameFile = async(oldName, newName) => {
    try{
        rename(oldName, newName)
    }catch(error){
       console.error('Operation Failed')
    }
}