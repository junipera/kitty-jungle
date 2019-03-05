const body = document.body;

const landingPage = document.getElementById('landing')
const aboutPage = document.getElementById('aboutPage')
const startGame = document.getElementById('startGame')
const ruleButton= document.getElementById('goToAbout')
const playAgain = document.getElementById('replay')

let checkRules = function(){
    landingPage.style.display='none';
    aboutPage.style.display='block';
}

ruleButton.addEventListener('click', checkRules)

let goHome = function(){
    aboutPage.style.display='none';
    landingPage.style.display='block';
}
playAgain.addEventListener('click', goHome)