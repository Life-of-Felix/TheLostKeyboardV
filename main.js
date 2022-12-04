let textFeild = document.querySelector('#textBox')
let i1 = document.querySelector('#item1')
let i2 = document.querySelector('#item2')
let i3 = document.querySelector('#item3')
let i4 = document.querySelector('#item4')
let items = document.querySelectorAll('.itemWin ul li')

let keyCase = document.querySelector('#case')
let SKeyCase = false
let screwdriver = document.querySelector('#hScrewdriver')
let SScrewdriver = false


let p1 = document.querySelector('#pin1')
let p2 = document.querySelector('#pin2')
let p3 = document.querySelector('#pin3')
let p4 = document.querySelector('#pin4')
let passwordBox = document.querySelector('#inPass')

let passScreen = document.querySelector('.passwordScreen')
let codeScreen = document.querySelector('.codeScreen')

let Dpassword = false



function pickUpItem(type){
    if(type === 'case'){
        i1.innerHTML = '<img id="case" src="img/keyboarddCase.svg" alt="Keyboardcase">'
        keyCase.classList.add('nonShow')
        SKeyCase = true
        textFeild.innerHTML = 'Ohhhhhhh what a nice case, looks solid. Just need a screwdriver and switches'

    }else if(type === 'screw'){
        i2.innerHTML = '<img id="hScrewdriver" src="img/screwdriverItem.svg" alt="screwdriver">'
        screwdriver.classList.add('nonShow')
        SScrewdriver = true
        textFeild.innerHTML = 'How did it come thier? thier is no screw inside the desk exactly'
    }
}
let countPass = 3
let guesses = 1
function typePassword(inNum){
    if(countPass === 3){
        if(passwordBox.innerHTML === '242'){
            passScreen.classList.add('nonShow')
            codeScreen.classList.remove('nonShow')
            textFeild.innerHTML = 'AAAAAAnd weeeeeee aaaaaaaaaare in'

        }else if(passwordBox.innerHTML != 'XXX'){
            textFeild.innerHTML = 'Darn! guessed ' + guesses + ', But next time. Should I mabye look around although?'
            guesses += 1
        }
        passwordBox.innerHTML = inNum
        countPass = 1
    }
    else{
        passwordBox.textContent += inNum
        countPass += 1
    }
}



async function desk(){
    if(SKeyCase === false){
        keyCase.addEventListener('click',() => pickUpItem('case'))
    }else if(SKeyCase === true){
        i1.innerHTML = '<img id="case" src="img/keyboarddCase.svg" alt="Keyboardcase">'
        keyCase.classList.add('nonShow')
    }
    
}
desk();
async function computer(){
    if(Dpassword === false){
        p1.addEventListener('click',() => typePassword('1'))
        p2.addEventListener('click',() => typePassword('2'))
        p3.addEventListener('click',() => typePassword('3'))
        p4.addEventListener('click',() => typePassword('4'))
    }
    
}
computer();
async function hole(){
    if(SScrewdriver === false){
        screwdriver.addEventListener('click',() => pickUpItem('screw'))
    }else if(SScrewdriver === true){
        i2.innerHTML = '<img id="hScrewdriver" src="img/screwdriverItem.svg" alt="screwdriver">'
        screwdriver.classList.add('nonShow')
        SScrewdriver = true
    }
    
}
hole();
