//page variables
const landingPage = document.getElementById('landing')
const aboutPage = document.getElementById('aboutPage')
const gamePlayPage = document.getElementById('game')
//level page variables
const lev1 = document.getElementById('level1')
const lev2 = document.getElementById('level2')
const lev3 = document.getElementById('level3')
const loser = document.getElementById('lose')
const win = document.getElementById('win')
//button variables
const startGame = document.getElementById('startGame')
const ruleButton= document.getElementById('goToAbout')
const returnHome = document.getElementById('replay')
const playAgain = document.getElementById('replay2')
const arrow = document.getElementById('arrow')
//cat variables
const petCat1 = document.getElementById('cat1')
const petCat21 = document.getElementById('cat1-level2')
const petCat22 = document.getElementById('cat2-level2')
const petCat31=document.getElementById('cat1-level3')
const petCat32=document.getElementById('cat2-level3')
const petCat33=document.getElementById('cat3-level3')
//additional variables
const levelCounter = document.getElementById('levelBar')
const friendCounter = document.getElementById('friendBar')
let catBadge = document.getElementsByClassName('emojiCat')
let catScratch = document.getElementById('scratch')
const happiness = document.getElementById('heart')
let count = 0

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
    count=0;  
    aboutPage.style.display='none';
    landingPage.style.display='block';
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
    lev2.style.display='none'
    lev3.style.display='none'
    win.style.display='none'
    loser.style.display='block'
    playAgain.style.display='inline'
    while (friendCounter.hasChildNodes()){
    friendCounter.removeChild(friendCounter.firstChild)};
    alert("You went too far, and your cat friend attacked!")
}

let levelOneLoveMeter = function(){ 
    if (count === 3) {
     createBadge()
     alert("You made a cat friend! Go to Level 2.")
    } else if (count >= 4) {
     catAttack()
 }
 }

let levelOnePlay = function(){
    refresh();
    landingPage.style.display='none';
    lev1.style.display = 'block'
    lev2.style.display='none'; 
    lev3.style.display='none';
    win.style.display='none'
    let petCat = function() {
        let heartFlash = setInterval(() => happiness.classList.toggle('flash'), 100);
        setTimeout(() => { clearInterval(heartFlash)}, 400)
        count += 1;
        levelOneLoveMeter()
    }
    petCat1.addEventListener('click', petCat)
    arrow.addEventListener('click', levelTwoPlay)
}

let levelTwoLoveMeter = function(){
    if (count === 4) {
        createBadge()
        createBadge()
        alert('You made more cat friends! Go to Level 3.')
    } else if (count >= 5) {
        catAttack()
    }
}

let levelTwoPlay = function (){
    count=0;
    lev1.style.display='none' 
    lev2.style.display='inline-flex'
    lev3.style.display='none'
    win.style.display='none'
    levelCounter.innerHTML='<h2>Level 2</h2>'

    petCat = function() {
        let heartFlash = setInterval(() => happiness.classList.toggle('flash'), 100);
        setTimeout(() => { clearInterval(heartFlash)}, 400)
        count += 1;
        levelTwoLoveMeter()
    }
    petCat21.addEventListener('click', petCat)
    petCat22.addEventListener('click', petCat)
    arrow.addEventListener('click', levelThreePlay)
}

let levelThreeLoveMeter = function() {
    if (count === 6) {
        createBadge()
        createBadge()
        createBadge()
        alert('You made more cat friends!')
        checkWinner()
    } else if (count >= 7) {
        catAttack()
    }
}

let checkWinner = function(){
    if (friendCounter.childElementCount < 5){
        playAgain.style.display='inline'    
    } else if (friendCounter.childElementCount>=5){
        playAgain.style.display='none'
        arrow.style.display='block'
        arrow.addEventListener('click', winScreen)
    }
}

let levelThreePlay = function(){
    count = 0;
    arrow.style.display='none'
    lev1.style.display='none'
    lev2.style.display='none'
    lev3.style.display='inline-flex'
    win.style.display='none'
    levelCounter.innerHTML='<h2>Level 3</h2>'

    petCat = function() {
        let heartFlash = setInterval(() => happiness.classList.toggle('flash'), 100);
        setTimeout(() => { clearInterval(heartFlash)}, 400)
        count += 1;
        levelThreeLoveMeter()
    }

    petCat31.addEventListener('click', petCat)
    petCat32.addEventListener('click', petCat)
    petCat33.addEventListener('click', petCat)
}

let winScreen = function(){
    lev1.style.display='none'
    lev2.style.display='none'
    lev3.style.display='none'
    win.style.display='inline-flex'
    playAgain.style.display='inline'
    levelCounter.innerHTML='<h2>You win!</h2>'  
}

//event listeners
ruleButton.addEventListener('click', checkRules)
returnHome.addEventListener('click', goHome)
playAgain.addEventListener('click', goHome)
startGame.addEventListener('click', levelOnePlay)
