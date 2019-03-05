//page variables
const landingPage = document.getElementById('landing')
const aboutPage = document.getElementById('aboutPage')
const gamePlayPage = document.getElementById('game')
//button variables
const startGame = document.getElementById('startGame')
const ruleButton= document.getElementById('goToAbout')
const playAgain = document.getElementById('replay')

//functions
let checkRules = function(){
    landingPage.style.display='none';
    aboutPage.style.display='block';
}

let goHome = function(){
    aboutPage.style.display='none';
    landingPage.style.display='block';
}

let playGame = function(){
    landingPage.style.display='none';
    gamePlayPage.style.display='block';
}


ruleButton.addEventListener('click', checkRules)
playAgain.addEventListener('click', goHome)
startGame.addEventListener('click', playGame)

