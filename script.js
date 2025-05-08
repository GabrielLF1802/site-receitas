async function Instrucoes(){
    let prato = document.getElementById('pratoinput').value
    try{
        const resposta = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${prato}`)
        const data = await resposta.json()
        if(data.meals){
            const texto= document.createElement('p')
            const text= data.meals[0].strInstructions
            texto.textContent= text
            document.getElementById('prato').appendChild(texto)
        }else{
            console.log('Erro')
        }
    } catch{
        
    }}
function novapagina(){
    const prato= document.getElementById('pratoinput').value
    window.location.href= `prato.html?busca=${encodeURIComponent(prato)}`
}

function paginaReceitas(){
    const letra = document.getElementById('letraInicial').value
    window.location.href=`receitas.html?busca=${encodeURIComponent(letra)}`
}





// clicar e aparecer a lista de ingredientes 

