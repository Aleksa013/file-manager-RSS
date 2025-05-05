import { createReadStream } from 'node:fs'
import { getLocation } from '../utils.js';

const { createHash  } = await import('node:crypto');

export const calculateHash = async(path) => {
    try{
        const hash = createHash('sha256')
        const rs = createReadStream(path)
        rs.on('data', (data) => {    
            console.log(hash.update(data).digest('hex'))
            getLocation()
        }) 
    }catch{
        console.error('Operation failed')
    }
  
}