

export async function getAllRepo(nome){
    const repoUser = await fetch(`https://api.github.com/users/${nome}/repos` ,{
        method: 'GET',
        headers: {
            "Content-Type" : 'application/json'
        }
    })
        .then((response) => {
            if(response.id > 0){
                console.log(response.data)
                localStorage.setItem('repoUser', response.data)
                console.log(response.data)
                return response.json()
               
            }else{
                console.log(error);
            }
            
        })
        
    return repoUser
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
