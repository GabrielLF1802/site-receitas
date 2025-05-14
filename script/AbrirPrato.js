window.onload = async function(){
    const params = new URLSearchParams(window.location.search);
    const prato = params.get('busca')

    try{
        const resposta = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${prato}`)
        const data = await resposta.json()
        console.log(data)
        if (data.meals){
            const img = document.createElement('img')
            const titulo = data.meals[0].strMeal
            const nome = document.createElement('h1')
            nome.textContent= titulo
            console.log(titulo)
            img.src= data.meals[0].strMealThumb
            img.alt= `${prato}`
            const origem = document.createElement('p')
            const text= `${data.meals[0].strArea} food`
            origem.textContent = text
            document.getElementById('titulo').appendChild(nome)
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
async function Instrucoes() {
    const params = new URLSearchParams(window.location.search);
    const nomePrato = params.get('busca');
    
    try {
        const resposta = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${nomePrato}`);
        const data = await resposta.json();
        
        if (data.meals) {
            const instrucoesContainer = document.getElementById('instrucoes');
            instrucoesContainer.innerHTML = ''; // Limpa o container antes de adicionar novas instruções
            
            const text = data.meals[0].strInstructions;
            const textoformat = text.split(".");
            let instrucoesHTML = '<h2>Instructions</h2>';
            
            textoformat.forEach((etapa) => {
                const textolimpo = etapa.trim();
                if (textolimpo.length > 0) {
                    instrucoesHTML += `<p> - ${textolimpo}.</p>`;
                }
            });
            
            instrucoesContainer.innerHTML = instrucoesHTML;
        } else {
            
            const erroTitulo = document.createElement('h1');
            erroTitulo.innerHTML = 'ERROR<br>Invalid Result';
            const pratoContainer = document.getElementById('prato1');
            pratoContainer.innerHTML = ''; // limpa conteúdo anterior (se quiser)
            pratoContainer.appendChild(erroTitulo);
            document.getElementById('footer').innerHTML=''
        }
    }
    catch {
    }
}