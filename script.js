var home1 = document.getElementById('home1')
var home2 = document.getElementById('home2')

var buscar1 = document.getElementById('buscar1')
var buscar2 = document.getElementById('buscar2')

var biblioteca1 = document.getElementById('biblioteca1')
var biblioteca2 = document.getElementById('biblioteca2')


var playlist = document.getElementById('playlist')
var curtidas = document.getElementById('curtidas')

function mostrar() {



    home1.classList.add('hide')
    home2.classList.add('branco')
    home2.classList.remove('hide')

    biblioteca2.classList.add('hide')
    biblioteca1.classList.remove('hide')


    buscar2.classList.add('hide')
    buscar1.classList.remove('hide')

    playlist.classList.remove('branco')
    curtidas.classList.remove('branco')



}




function mostrar2() {



    buscar1.classList.add('hide')
    buscar2.classList.add('branco')
    buscar2.classList.remove('hide')

    biblioteca2.classList.add('hide')
    biblioteca1.classList.remove('hide')


    home2.classList.add('hide')
    home1.classList.remove('hide')

    playlist.classList.remove('branco')
    curtidas.classList.remove('branco')



}

function mostrar3() {


    biblioteca1.classList.add('hide')
    biblioteca2.classList.add('branco')
    biblioteca2.classList.remove('hide')

    buscar2.classList.add('hide')
    buscar1.classList.remove('hide')


    home2.classList.add('hide')
    home1.classList.remove('hide')

    playlist.classList.remove('branco')
    curtidas.classList.remove('branco')



}


function mostrar4() {

    biblioteca1.classList.remove('hide')
    biblioteca2.classList.add('hide')

    buscar2.classList.add('hide')
    buscar1.classList.remove('hide')


    home2.classList.add('hide')
    home1.classList.remove('hide')

    playlist.classList.add('branco')
    curtidas.classList.remove('branco')


}

function mostrar5() {


    biblioteca1.classList.remove('hide')
    biblioteca2.classList.add('hide')

    buscar2.classList.add('hide')
    buscar1.classList.remove('hide')


    home2.classList.add('hide')
    home1.classList.remove('hide')

    playlist.classList.remove('branco')

    curtidas.classList.add('branco')

}
