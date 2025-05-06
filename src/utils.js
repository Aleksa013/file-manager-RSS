import os from 'node:os'
import { homedir } from 'node:os'
import { cwd } from 'node:process'
import { relative, resolve } from 'node:path'

import { commands, onePathCommands, twoPathsCommands } from "./commands/commands.js";

const allCommands = [...commands, ...onePathCommands, ...twoPathsCommands]

export const getGreeting = 
(userName, purpose) => {

return   (purpose === 'welcome'
? `Welcome to the File Manager, ${userName}!${os.EOL}You are currently in ${homedir()}`
:`Thank you for using File Manager,${userName}, goodbye!${os.EOL}You are currently in ${cwd()}`
)}
  
export const getLocation = () => console.log(`You are currently in ${ relative(homedir(),cwd()).length?resolve(homedir(),cwd()): homedir() }`)

export const checkPrompt = (stringChunk) => {
   return allCommands.includes(stringChunk.split(' ')[0]) &&
              (  (twoPathsCommands.includes(stringChunk.split(' ')[0])&& stringChunk.split(' ').length === 3 )||
                (onePathCommands.includes(stringChunk.split(' ')[0])&& stringChunk.split(' ').length === 2) ||
                (commands.includes(stringChunk.split(' ')[0]) && stringChunk.split(' ').length === 1))
}

export const getRelativePath = (path) => relative(homedir(),path).length? path: relative(homedir(),path)