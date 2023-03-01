

export async function getAllRepo(nome){
    try{
        const repoUser = await fetch(`https://api.github.com/users/${nome}/repos` ,{
            method: 'GET',
            headers: {
                "Content-Type" : 'application/json'
            }
        })

        const data = await repoUser.json()
       
        console.log(data)

        localStorage.setItem('userGitRepo', JSON.stringify(data))

        return data
        
    }
    
    catch(err){
        console.log(err)
    }
}






export async function getUsers(nome) {
        
        const user = await fetch(`https://api.github.com/users/${nome}`,{
        method: 'GET',
        headers: {
            'Content-Type' : 'application/json'
        }
        })
        let response = await user.json()
        
        if(user.ok){
            localStorage.setItem('userGit', JSON.stringify(response));
            window.location.replace('/src/pages/profile.html')
        
        }else{
            window.location.replace('/src/pages/error.html')
        }
        
}
