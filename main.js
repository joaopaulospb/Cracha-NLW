const accountSocialMedia = {
  github: 'joaopaulospb',
  youtube: 'jakelinygracielly',
  facebook: 'maykbrito',
  instagram: 'jakeliny.gracielly',
  twitter: 'jakelinytec'
}

function changeNames() {
  document.getElementById('userName').textContent = 'Olivia' //pode ser substituído só por: userName.textContent='Olivia'... função só para exemplo
}

function changeSocialMediaLinks() {
  //for(let i=0;i<=10;i++) for tradicional

  for (let li of socialLinks.children) {
    //.children pega os filhos dessa ul, as lis

    const social = li.getAttribute('class') //const dentro do for só é const durante aquele ciclo do for, depois ela pode mudar

    li.children[0].href = `https://www.${social}.com/${accountSocialMedia[social]}`
    //.children[0] pega o primeiro filho da li
    //usando o texto entre as crases, da pra inserir variáveis no texto com ${}
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${accountSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLogin.textContent = data.login
      userProfile.href = data.html_url
      userPhoto.src = data.avatar_url
    })
  //fetch pega as informações do link e retorna uma promisse
  //=> chama arrow function. É uma forma contraída da função onde vc não declara o nome da função ("anônima"): (argumento 1, argumento 2)=>{código}. Se é só 1, então: argumento=>{código}. Se é só um comando no código, fica: argumento => código.
  //o then pega o resultado do fetch e considera como o input da função(que nesse caso eu chamei e response). O próximo then pega o output do primeiro e considera como input(que eu chamei de data). o then é a promise
}

getGitHubProfileInfos()
