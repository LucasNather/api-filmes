const botao = document.querySelector('#botao')

function consumirApi(){
    const tituloFilme = document.querySelector('h2')
    const sinopse = document.querySelector('#overview')
    const genero = document.querySelector('#genero')
    const idAleatorio = Math.floor(Math.random() * 100)
    const url = `https://api.themoviedb.org/3/movie/${idAleatorio}?api_key=8d6e404dee0d298b208d55313605c096`
   
    fetch(url)
    .then(response => response.json())
    .then(data => {

        if(data.title === undefined){
            tituloFilme.innerHTML = "Filme não encontrado"
            sinopse.innerHTML = "Não encontrado"
            genero.innerHTML = "Não encontrado"
         }else{
             tituloFilme.innerHTML = data.title
             sinopse.innerHTML = data.overview
             for(let dados of data.genres){
                 let nome = dados.name
                 genero.innerHTML = `Gênero: ${nome}`
             }
         }
    }) 
    .catch(err => console.log(err))

    console.log(idAleatorio)
}


botao.addEventListener('click',consumirApi)