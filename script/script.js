window.onload= async function(){ // Random meet 
    try{
    for (var i=1; i<13; ++i){
        const resposta = await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        const data = await resposta.json()
        console.log(data.meals)
        const nomereceita= data.meals[0].strMeal
        const srcimagem= data.meals[0].strMealThumb
        const receita= `<div class="receita"><p>${nomereceita}</p>
        <img src="${srcimagem}" alt="${nomereceita}"> </div>`
        document.getElementById('randomreceitas').innerHTML+=receita
    }
    }
    catch{
        console.log('ERRO')
    }
}



function novapagina(){
    const prato= document.getElementById('pratoinput').value
    window.location.href= `prato.html?busca=${encodeURIComponent(prato)}`
}

function paginaReceitas(){
    const letra = document.getElementById('letraInicial').value
    window.location.href=`receitas.html?busca=${encodeURIComponent(letra)}`
}






// clicar e aparecer a lista de ingredientes 

