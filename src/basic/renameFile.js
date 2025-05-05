import { rename } from 'node:fs/promises';


export const renameFile = async(oldName, newName) => {
    try{
        rename(oldName, newName)
    }catch(error){
        throw new Error('Operation Failed')
    }
}