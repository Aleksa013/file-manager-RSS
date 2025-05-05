import { createWriteStream } from 'node:fs'
import { cwd } from 'node:process'

export const createEmptyFile = async(fileName)=> {
    try{
        const ws = createWriteStream(cwd()+'\\'+fileName)
        ws.on('error',(err)=> console.error(err))
        console.log('File '+fileName+' created')
    }catch(error){
        console.log('Operation failed', error)
    }
}