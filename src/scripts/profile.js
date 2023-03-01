import { getUsers } from "./request.js";



export async function userGit() {


    const input = document.querySelector('#nome');
    const button = document.querySelector('.search__button')


    button.addEventListener('click', async (e) =>{
        e.preventDefault()

        await getUsers(input.value)
    
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

    const userExchange = document.createElement('a');
    userExchange.innerText = "Troca de usuário";
    userExchange.classList.add('userExchange')
    userExchange.href = '/'
    



    headerProfile.append(figureImg, nameUser, userExchange);
    figureImg.appendChild(imgProfile);



}

renderUser()




export async function renderRepo (){
    let repoObject = JSON.parse(localStorage.getItem('userGitRepo'));

  
    const containerRepos = document.querySelector('.repo__container')
    const ul = document.createElement('ul');
    ul.innerHTML = ''
    ul.classList.add('ulName')
    containerRepos.appendChild(ul)

    repoObject.forEach( async (element) => {

        
        
        const li = document.createElement('li');

        const h1 = document.createElement('h1');
        h1.innerText = element.name

        const pDescription = document.createElement('p')
        pDescription.innerText = element.description

        const buttonRepo = document.createElement('a')
        buttonRepo.innerText = 'Repositório'
        buttonRepo.href = element.html_url
        
        li.appendChild(h1)
        ul.appendChild(li)

        li.append(pDescription, buttonRepo)

 
    });
  

    
}

renderRepo()


