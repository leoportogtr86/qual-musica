let certa = document.querySelector('#certa')
let certa_play = document.querySelector('#certa_play')
let errada1 = document.querySelector('#errada1')
let errada2 = document.querySelector('#errada2')
let errada3 = document.querySelector('#errada3')

certa.onclick = function () {

    
    certa_play.play()

    certa.classList.add('certa')


    setTimeout(() => {

        window.location = 'pg5.html'
        
    }, 3000);
    
    
}

errada1.onclick = function () {

    errada1.classList.add('errada')
    
}


errada2.onclick = function () {

    errada2.classList.add('errada')
    
}


errada3.onclick = function () {

    errada3.classList.add('errada')
    
}