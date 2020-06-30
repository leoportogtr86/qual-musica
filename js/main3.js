let certa = document.querySelector('#certa')
let certa_play = document.querySelector('#certa_play')

certa.onclick = function () {

    
    certa_play.play()


    setTimeout(() => {

        window.location = 'pg4.html'
        
    }, 3000);
    
}