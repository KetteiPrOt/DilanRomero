const botones = [
    document.getElementById('inicio'),
    document.getElementById('acercaDe'),
    document.getElementById('servicios'),
    document.getElementById('contacto')
];

class parametrosScroll {

    constructor (arriba) {

        this.top = arriba;
        this.left = 0;
        this.behavior = 'smooth';

    }

}

let options, ancho;

// Funcion principal

function aplicarScroll () {

    ancho = window.screen.width

    if (ancho <= 425) {
        options = [
            new parametrosScroll(0),
            new parametrosScroll(800),
            new parametrosScroll(1650),
            new parametrosScroll(10000)
        ];
    } else if (ancho <= 768) {
        options = [
            new parametrosScroll(0),
            new parametrosScroll(800),
            new parametrosScroll(1520),
            new parametrosScroll(10000)
        ];
    } else {
        options = [
            new parametrosScroll(0),
            new parametrosScroll(800),
            new parametrosScroll(800),
            new parametrosScroll(10000)
        ];
    }
    
    botones[0].addEventListener('click', () => {
    
        window.scroll(options[0]);
    
    });
    
    botones[1].addEventListener('click', () => {
    
        window.scroll(options[1]);
        
    });
    
    botones[2].addEventListener('click', () => {
    
        window.scroll(options[2]);
        
    });
    
    botones[3].addEventListener('click', () => {
    
        window.scroll(options[3]);
        
    });

}

window.addEventListener('resize', aplicarScroll);

aplicarScroll();