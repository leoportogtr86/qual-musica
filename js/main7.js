let certa = document.querySelector('#certa')
let certa_play = document.querySelector('#certa_play')

certa.onclick = function () {

    
    certa_play.play()
    certa.classList.add('certa')


    setTimeout(() => {

        window.location = 'https://leoportogtr86.github.io/maior/win'
        
    }, 3000);
    
}