import os from 'node:os'
import { cwd } from "node:process";


export const getGreeting = 
(userName, purpose) => {
return   (purpose === 'welcome'
? `Welcome to the File Manager, ${userName}!`
:`Thank you for using File Manager,${userName}, goodbye!`)+
os.EOL
+
`You are currently in ${cwd()}`
}
  
