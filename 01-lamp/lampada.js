/* Criando variáveis com d.o.m */

const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');

//Criando evento do botão

turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);

//Evento mouseOver quando o ponteiro estiver sobre a lâmpada
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroken);

function isLampBrokem() {
    return lamp.src.indexOf('quebrada') > -1
};

function lampOn() {
    if(!isLampBrokem()){
        lamp.src = './img/ligada.jpg'
    }
}

function lampOff() {
    if(!isLampBrokem()){
        lamp.src = './img/desligada.jpg'
    }
}

function lampBroken(){
    lamp.src = './img/quebrada.jpg'

}