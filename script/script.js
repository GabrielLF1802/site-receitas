window.onload= async function(){ // Random meet 
    try{
    for (var i=1; i<13; ++i){
        const resposta = await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        const data = await resposta.json()
        const nomereceita= data.meals[0].strMeal
        const srcimagem= data.meals[0].strMealThumb
        const receita= `<div class="receita"><p>${nomereceita}</p>
        <img src="${srcimagem}" alt="${nomereceita}" onclick="AbrirReceita(this)" > </div> `
        document.getElementById('randomreceitas').innerHTML+=receita
    }
    }
    catch{
        let erro= document.createElement('p')
        erro.innerHTML= 'ERRO'
        document.getElementById('randomreceitas').appendChild(erro)
    }
}

function AbrirReceita(imagem){ // Direcionar para uma pagina ao clicar em uma receita do menu inicial
    const prato= imagem.alt
    window.location.href= `AbrirPrato.html?busca=${encodeURIComponent(prato)}`

}



function novapagina(){ // Abrir uma pagina apra a receita específica digitada 
    const prato= document.getElementById('pratoinput').value
    window.location.href= `AbrirPrato.html?busca=${encodeURIComponent(prato)}`
}

function paginaReceitas(){ // Criar uma pagina com as receitas de acordo com a letra inicial 
    const letra = document.getElementById('letraInicial').value
    window.location.href=`PesquisarInicial.html?busca=${encodeURIComponent(letra)}`
}






// clicar e aparecer a lista de ingredientes 

