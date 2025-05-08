window.onload = async function(){
    const params = new URLSearchParams(window.location.search);
    const prato = params.get('busca')
    try{
        const resposta = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${prato}`)
        const data = await resposta.json()
        console.log(data)
        if (data.meals){
            const img = document.createElement('img')
            img.src= data.meals[0].strMealThumb
            img.alt= `${prato}`
            const origem = document.createElement('p')
            const text= `${data.meals[0].strArea} food`
            origem.textContent = text
            document.getElementById('prato1').appendChild(img)
            document.getElementById('prato1').appendChild(origem)
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
    const nomePrato = params.get('busca')
    try{
        const resposta = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${nomePrato}`)
        const data = await resposta.json()
        if(data.meals){
            const texto= document.createElement('p')
            const text= data.meals[0].strInstructions
            texto.textContent= text
            document.getElementById('instrucoes').appendChild(texto)
        }else{
            console.log('Erro')
        }
    } catch{
        
    }}