// const MC = document.getElementById('MC')

// MC.addEventListener('click', function(e){
//     console.log('MC')
// })

const buttons = document.querySelector('.buttons')

// buttons.addEventListener('click', function(e){
//     var text = buttons.innerText
//     console.log(text)
//     var displayResult = document.getElementsByClassName('display-result').innerText = text
//     displayResult.innerText = text
// })

const MC = document.getElementById('MC')

const a = MC.addEventListener('click', function(e){
    let text = MC.innerText
    let displayResult = document.querySelector('h1')
    displayResult.innerHTML = text
    })

