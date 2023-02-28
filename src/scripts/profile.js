import { getUsers, getAllRepo } from "./request.js";



export async function userGit() {


    const input = document.querySelector('#nome');
    const button = document.querySelector('.search__button')


    button.addEventListener('click', async (e) =>{
        e.preventDefault()

        await getUsers(input.value)
        await getAllRepo(input.value)

       
    })
   

}

export async function renderUser (){
    let userObject = JSON.parse(localStorage.getItem('userGit'))


    const headerProfile = document.querySelector('.profile__info');

    const imgProfile = document.createElement('img')
    imgProfile.src = userObject.avatar_url;

    const figureImg = document.createElement('figure')

    const nameUser = document.createElement('p')
    nameUser.innerText = userObject.name

    const userExchange = document.createElement('button');
    userExchange.innerText = "Troca de usuário";



    headerProfile.append(figureImg, nameUser, userExchange)
    figureImg.appendChild(imgProfile)



}

renderUser()




export function renderRepo (){
    let repoObject = JSON.parse(localStorage.getItem('repoUser'))

    console.log(repoObject)
}

renderRepo()