window.onload= async function (){
    const params = new URLSearchParams(window.location.search);
    const letra = params.get('busca')
    try{
        const resposta = await fetch (`https://www.themealdb.com/api/json/v1/1/search.php?f=${letra}`)
        const data = await resposta.json()
        document.getElementById('pratoinput').remove()
        if(data.meals){
            const container= document.createElement('div')
            container.id= 'container'
            data.meals.forEach(meal => {
                let bloco = document.createElement('div')
                bloco.innerHTML= `<h3>${meal.strMeal}</h3>
                    <img src="${meal.strMealThumb}" alt="${meal.strMeal}" onclick="AbrirReceita(this)">`

                container.appendChild(bloco)
            });
            document.getElementById('pesquisa2').appendChild(container);
        }else{
            console.log('Erro')
            
        }
    }
    catch {
        let erro = document.createElement('p')
        erro.innerHTML= '<h1>ERROR<br>Invalid Result</h1>'
        document.getElementById('prato2').appendChild(erro)
        document.getElementById('tit').innerHTML=''
        document.getElementById('footer').innerHTML=''
    }

}

function AbrirReceita(imagem) {
    const nomeReceita = imagem.alt
    window.location.href=`AbrirPrato.html?busca=${encodeURIComponent(nomeReceita)}`
}