import { mkdir } from 'node:fs/promises'
import { cwd } from 'node:process'

export const createNewDir = async(dirName) => {
    try{
        mkdir(cwd()+'\\'+dirName);
    }catch{
        throw new Error('Operation failed')
    }
}