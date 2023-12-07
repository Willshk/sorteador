async function sortear(){
    const total = Number(document.querySelector('#ttotal').value)
    const menor = Number(document.querySelector('#tmenor').value)
    const maior = Number(document.querySelector('#tmaior').value)
    

    for (let y = 0; y < 20; y++){
       // Limpar resultados antigos

       const elelmentoHtmlResultValues = document.querySelector('.results-values')
       elelmentoHtmlResultValues.innerHTML = ''
    
       for (let i = 0;i < total; i++ ){
            // Gerar um número aleatóirio entre o menor e maior valor
    const resultado = Math.floor(Math.random() * (maior - menor + 1) ) + menor
    
    // Gerar um elemento HTML para o resultado
    const elementoHtml = document.createElement('div')
    elementoHtml.classList.add('result-value')
    elementoHtml.innerText = resultado

    // Adicionar o elemento dentro do HTML existente
    elelmentoHtmlResultValues.append(elementoHtml)
    }

    await wait(20)
}
}

function wait(tempo){
    return new Promise ((resolve) => {
        setTimeout(() => resolve(), tempo)
    })
}


// function entrou(){
//     const btn = document.querySelector('#sort')
//     btn.style.background = 'blue'
// }