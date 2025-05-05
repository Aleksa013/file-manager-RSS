import { createWriteStream } from 'node:fs'
import { cwd } from 'node:process'
import { getLocation } from '../utils.js'

export const createEmptyFile = async(fileName)=> {
    try{
         createWriteStream(cwd()+'\\'+fileName)
         getLocation()
    }catch{
        throw new Error('Operation failed')
    }
}