//page variables
const landingPage = document.getElementById('landing')
const aboutPage = document.getElementById('aboutPage')
const gamePlayPage = document.getElementById('game')
//level variables
const lev1 = document.getElementById('level1')
const lev2 = document.getElementById('level2')
const lev3 = document.getElementById('level3')
const loser = document.getElementById('lose')
//button variables
const startGame = document.getElementById('startGame')
const ruleButton= document.getElementById('goToAbout')
const playAgain = document.getElementById('replay')
const next = document.getElementById('arrow')
const petButton = document.getElementById('pet')
const petCat1 = document.getElementById('cat1')
//additional variables
const levelCounter = document.getElementById('levelBar')
const friendCounter = document.getElementById('friendBar')
let count = 0

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
    lev2.style.display='none';
}

let nextLevel = function(){
    if (lev1.style.display='block'){
        count = 0
        lev1.style.display='none' 
        lev2.style.display='block'
        levelCounter.innerHTML='Level 2'
    } 
    else if (lev2.style.display='block'){
        count = 0;
        lev2.style.display='none'
        lev3.style.display='block'
        arrow.remove()
        levelCounter.innerHTML='Level 3'
    }
}


let petCat = function() {
    const happiness = document.getElementById('heart')
    let heartFlash = setInterval(() => happiness.classList.toggle('flash'), 250);
    setTimeout(() => { clearInterval(heartFlash)}, 1000);
   count += 1;
   if (count === 2) {
    const newDiv = document.createElement('div')
    newDiv.setAttribute('class', 'emojiCat')
    friendCounter.appendChild(newDiv)
    alert("You made a cat friend! Go to Level 2")
    console.log(friendCounter.length)
} else if (count >= 3) {
    happiness.style.display= 'none'
    arrow.style.display= 'none'
    lev1.style.display='none'
    loser.style.display='block'
    alert("You went too far, and your cat friend attacked!")}
}


//event listeners
ruleButton.addEventListener('click', checkRules)
playAgain.addEventListener('click', goHome)
startGame.addEventListener('click', playGame)
next.addEventListener('click', nextLevel)
petCat1.addEventListener('click', petCat)

