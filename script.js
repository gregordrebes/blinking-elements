// https://stackoverflow.com/questions/11867545/change-text-color-based-on-brightness-of-the-covered-background-area
function setContrast(event) {
    const targetElement = event.target;
    
    const rgb = [];
    
    // CORES ALEATÓRIAS
    rgb[0] = Math.round(Math.random() * 255);
    rgb[1] = Math.round(Math.random() * 255);
    rgb[2] = Math.round(Math.random() * 255);
    
    // http://www.w3.org/TR/AERT#color-contrast
    const brightness = Math.round(((parseInt(rgb[0]) * 299) + (parseInt(rgb[1]) * 587) + (parseInt(rgb[2]) * 114)) / 1000);
    const textColour = (brightness > 125) ? 'black' : 'white';
    const backgroundColour = 'rgb(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ')';

    targetElement.style.background = backgroundColour;
    targetElement.style.color = textColour;
    
    // POSSIBILIDADE DE MUDAR OS FILHOS TAMBÉM
    // targetElement.querySelectorAll("*").forEach(element => {
    //     element.style.background = backgroundColour;
    //     element.style.color = textColour;
    // });
}

// ADICIONA LISTENER PARA MOVIMENTO DO MOUSE
document.addEventListener('mousemove', setContrast);

/* ABAIXO - PRIMEIRA IDEIA QUE TIVE - ALTERAVA BG COLOR COM CLICK */
/* 
const previousElement = null

function changeToRandomBackgroundColor() {
    // https://css-tricks.com/snippets/javascript/random-hex-color/
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    this.style.background = `#${randomColor}`;
}

https://stackoverflow.com/questions/8813051/determine-which-element-the-mouse-pointer-is-on-top-of-in-javascript
document.addEventListener('mousemove', e => {
    
        if (previousElement instanceof EventTarget) {
                previousElement.removeEventListener('mousedown', changeToRandomBackgroundColor);
    }
    previousElement = e.target;
    previousElement.addEventListener('mousedown', changeToRandomBackgroundColor);
}, { passive: true }); 
*/