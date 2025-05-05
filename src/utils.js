import os from 'node:os'
import { homedir } from 'node:os'
import { cwd } from 'node:process'
import { relative, resolve } from 'node:path'

export const getGreeting = 
(userName, purpose) => {

return   (purpose === 'welcome'
? `Welcome to the File Manager, ${userName}!`
:`Thank you for using File Manager,${userName}, goodbye!`)+
os.EOL+`You are currently in ${homedir()}`
}
  
export const getLocation = () => console.log(`You are currently in ${ relative(homedir(),cwd()).length?resolve(homedir(),cwd()): homedir() }`)
