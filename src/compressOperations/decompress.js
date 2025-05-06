import { createReadStream, createWriteStream } from "node:fs"
import  { createBrotliDecompress } from "node:zlib"
import { pipeline } from "node:stream/promises"

export const decompressFile = async(path, newPath) => {
try{
   await pipeline(createReadStream(path),createBrotliDecompress(),createWriteStream(newPath))
}catch{
    console.error('Operation failed')
}
}