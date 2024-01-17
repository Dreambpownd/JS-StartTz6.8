const trafficLightElTop = document.querySelector('#trafficLightTop');
const trafficLightElMid = document.querySelector('#trafficLightMid');
const trafficLightElBot = document.querySelector('#trafficLightBot');

function makeGreen() {
    trafficLightElTop.style.background = ('green');
    trafficLightElMid.style.background = ('black');
    trafficLightElBot.style.background = ('black');
    trafficLightElTop.removeEventListener('click', makeGreen);
    trafficLightElTop.addEventListener('click', makeYellow);
    trafficLightElMid.removeEventListener('click', makeGreen);
    trafficLightElMid.addEventListener('click', makeYellow);
    trafficLightElBot.removeEventListener('click', makeGreen);
    trafficLightElBot.addEventListener('click', makeYellow);
}

trafficLightElTop.addEventListener('click', makeYellow);
trafficLightElMid.addEventListener('click', makeYellow);
trafficLightElBot.addEventListener('click', makeYellow);

function makeYellow() {
    trafficLightElTop.style.background = ('black');
    trafficLightElMid.style.background = ('yellow');
    trafficLightElBot.style.background = ('black');
    trafficLightElTop.removeEventListener('click', makeYellow);
    trafficLightElTop.addEventListener('click', makeRed);
    trafficLightElMid.removeEventListener('click', makeYellow);
    trafficLightElMid.addEventListener('click', makeRed);
    trafficLightElBot.removeEventListener('click', makeYellow);
    trafficLightElBot.addEventListener('click', makeRed);
}
trafficLightElTop.addEventListener('click', makeRed);
trafficLightElMid.addEventListener('click', makeRed);
trafficLightElBot.addEventListener('click', makeRed);


function makeRed() {
    trafficLightElTop.style.background = ('black');
    trafficLightElMid.style.background = ('black');
    trafficLightElBot.style.background = ('red');
    trafficLightElTop.removeEventListener('click', makeRed);
    trafficLightElTop.addEventListener('click', makeGreen);
    trafficLightElMid.removeEventListener('click', makeRed);
    trafficLightElMid.addEventListener('click', makeGreen);
    trafficLightElBot.removeEventListener('click', makeRed);
    trafficLightElBot.addEventListener('click', makeGreen);
}

trafficLightElTop.addEventListener('click', makeGreen);
trafficLightElMid.addEventListener('click', makeGreen);
trafficLightElBot.addEventListener('click', makeGreen);


