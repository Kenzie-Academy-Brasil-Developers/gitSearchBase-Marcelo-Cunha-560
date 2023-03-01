import { getAllRepo } from "./request.js";

async function exportRepo(){
    const captureRepo = JSON.parse(localStorage.getItem('userGit'))
    const name = captureRepo.login
   return await getAllRepo(name)
    

}

await exportRepo()