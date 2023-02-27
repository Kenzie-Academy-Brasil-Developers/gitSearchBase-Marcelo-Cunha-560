import { error } from "console";

export async function getlAllrepo(id){
    const repoUer = await fetch(`https://api.github.com/users/${id}` ,{
        method: 'GET',
        headers: {
            "Content-Type" : 'application/json'
        }
    })
        .then((response) => {
            if(response.id > 0){
                return response.json()
            }else{
                console.log(error);
            }
        })
    
}
console.log(getlAllrepo)

export async function getUsers(nome) {
    const users = await fetch(`https://api.github.com/users/${nome}`,{
    method: 'GET',
    headers: {
        'Content-Type' : 'application¹/json'
    }
    })
    .then(response => response.json())
    .then(resp =>  {
        localStorage.setItem('user', JSON.stringify(resp))
        if(resp.id != 0){

            window.location.replace('/src/pages/profile.html/profile.html')
        } else{
            window;location.replace('/src/pages/error.html')
        }
        return response.json()
    })
    .catch((err) => 
    console.log(err));

    return users
}

const user = await getUsers('mojombo')

console.log(user)