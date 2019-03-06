//page variables
const landingPage = document.getElementById('landing')
const aboutPage = document.getElementById('aboutPage')
const gamePlayPage = document.getElementById('game')
//level page variables
const lev1 = document.getElementById('level1')
const lev2 = document.getElementById('level2')
const lev3 = document.getElementById('level3')
const loser = document.getElementById('lose')
//button variables
const startGame = document.getElementById('startGame')
const ruleButton= document.getElementById('goToAbout')
const returnHome = document.getElementById('replay')
const playAgain = document.getElementById('replay2')
const arrow = document.getElementById('arrow')
const petButton = document.getElementById('pet')
const petCat1 = document.getElementById('cat1')
//additional variables
const levelCounter = document.getElementById('levelBar')
const friendCounter = document.getElementById('friendBar')
let catScratch = document.getElementById('scratch')
const happiness = document.getElementById('heart')
let count = 0

//for MVP
arrow.style.display='none'

//functions
let checkRules = function(){
    landingPage.style.display='none';
    aboutPage.style.display='block';
}

let refresh = function(){
    count=0;
    loser.style.display='none';
    gamePlayPage.style.display='block';
    playAgain.style.display='none';
    arrow.style.display='block';
    happiness.style.display='block';
}

let goHome = function(){
    aboutPage.style.display='none';
    landingPage.style.display='block';
    gamePlayPage.style.display='none';
}

let playGame = function(){
    refresh();
    landingPage.style.display='none';
    lev1.style.display = 'block'
    lev2.style.display='none';
}

let nextLevel = function(){
    if (lev1.style.display='block'){
        count = 0
        lev1.style.display='none' 
        lev2.style.display='block'
        levelCounter.innerHTML='<h2>Level 2</h2>'
    } 
    else if (lev2.style.display='block'){
        count = 0;
        lev2.style.display='none'
        lev3.style.display='block'
        arrow.remove()
        levelCounter.innerHTML='<h2>Level 3</h2>'
    }
}

let petCat = function() {
    let heartFlash = setInterval(() => happiness.classList.toggle('flash'), 200);
    setTimeout(() => { clearInterval(heartFlash)}, 800)
    count += 1;
    if (lev1.style.display='block') {
        levelOneLoveMeter()
    } 
}

let createBadge = function(){
    const newDiv = document.createElement('div')
    newDiv.setAttribute('class', 'emojiCat')
    friendCounter.appendChild(newDiv)
}

let catAttack = function (){
    happiness.style.display='none'
    arrow.style.display= 'none'
    lev1.style.display='none'
    loser.style.display='block'
    playAgain.style.display='inline'
    friendCounter.removeChild(friendCounter.firstChild);
}

let levelOneLoveMeter = function(){ 
   if (count === 2) {
    createBadge()
    alert("You made a cat friend!")
    playAgain.style.display='inline'
    arrow.style.display='none'
   } else if (count === 3) {
    catAttack()
    alert("You went too far, and your cat friend attacked!")
}
}

//event listeners
ruleButton.addEventListener('click', checkRules)
returnHome.addEventListener('click', goHome)
playAgain.addEventListener('click', goHome)
startGame.addEventListener('click', playGame)
// next.addEventListener('click', nextLevel)
petCat1.addEventListener('click', petCat)
