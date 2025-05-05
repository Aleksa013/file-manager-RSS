import { createReadStream, createWriteStream } from "node:fs"
import  { createBrotliCompress } from "node:zlib"
import { pipeline } from "node:stream/promises"

export const compressFile = async(path, newPath) => {
try{
    const rs = createReadStream(path)
    const ws = createWriteStream(newPath)
    pipeline(rs, createBrotliCompress(),ws)
}catch{
    console.error('Operation failed')
}
}