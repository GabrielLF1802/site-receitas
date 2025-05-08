window.onload = async function(){
    const params = new URLSearchParams(window.location.search);
    const nomeReceita = params.get('busca')
    console.log(nomeReceita)
    if (!nomeReceita) {
        console.log('Nenhuma receita encontrada na URL.');
        return;
    }

    try{
        const resposta = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${nomeReceita}`)
        const data = await resposta.json()
        console.log(data)
        if (data.meals){
            const img = document.createElement('img')
            img.src= data.meals[0].strMealThumb
            img.alt= `${nomeReceita}`
            const origem = document.createElement('p')
            const text= `${data.meals[0].strArea} food`
            origem.textContent = text
            document.getElementById('resprato').appendChild(img)
            document.getElementById('resprato').appendChild(origem)
            Instrucoes()
        } else{
            console.log('Erro! Prato não encontrado')
        }
        

        

    } catch (erro) {
        console.error('Não encontrada')
    }

}
async function Instrucoes(){
    const params = new URLSearchParams(window.location.search);
    const nomeReceita = params.get('busca')
    try{
        const resposta = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${nomeReceita}`)
        const data = await resposta.json()
        if(data.meals){
            const texto= document.createElement('p')
            const text= data.meals[0].strInstructions
            texto.textContent= text
            document.getElementById('resprato').appendChild(texto)
        }else{
            console.log('Erro')
        }
    } catch{
        
    }}