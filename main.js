let textFeild = document.querySelector('#textBox')
let i1 = document.querySelector('#item1')
let i2 = document.querySelector('#item2')
let i3 = document.querySelector('#item3')
let i4 = document.querySelector('#item4')
let items = document.querySelectorAll('.itemWin ul li')
let stateKeyboard = document.querySelector('#stateOfKeyboard')
let codeBut = document.querySelector("#codeQmk")
// win Window
let winWin = document.querySelector('.winScreen')


let keyCase = document.querySelector('#case')
let screwdriver = document.querySelector('#hScrewdriver')



let p1 = document.querySelector('#pin1')
let p2 = document.querySelector('#pin2')
let p3 = document.querySelector('#pin3')
let p4 = document.querySelector('#pin4')
let passwordBox = document.querySelector('#inPass')

let passScreen = document.querySelector('.passwordScreen')
let codeScreen = document.querySelector('.codeScreen')

localStorage.setItem('Dpassword', false)



function clearInv(){
    localStorage.clear();
    console.log('cleared localStroage')
    i1.innerHTML = '1'
    i2.innerHTML = '2'
    i3.innerHTML = '3'
}
i4.addEventListener('click',() => clearInv())




function pickUpItem(type){
    if(type === 'case'){
        i1.innerHTML = '<img id="case" src="img/keyboarddCase.svg" alt="Keyboardcase">'
        keyCase.classList.add('nonShow')
        textFeild.innerHTML = 'Ohhhhhhh what a nice case, looks solid. Just need a screwdriver and switches'
        localStorage.setItem('item1', 'case')
    }
    else if(type === 'screw'){
        i2.innerHTML = '<img id="Screwdriver" src="img/screwdriverItem.svg" alt="screwdriver">'
        screwdriver.classList.add('nonShow')
        textFeild.innerHTML = 'How did it come thier? thier is no screw inside the desk exactly'
        localStorage.setItem('item2', 'screw')
    }else if(type === 'switch'){
        i3.innerHTML = '<img id="switch" src="img/switch.svg" alt="switch">'
        screwdriver.classList.add('nonShow')
        textFeild.innerHTML = 'And how did you just appear?'
        localStorage.setItem('item3','switch')
    }else if(type === 'keyboard'){
        i1.innerHTML = '<img id="keyboard" src="img/keyboard.svg" alt="keyboard">'
        i1.classList.remove('selected')
        i2.classList.remove('selected')
        i3.classList.remove('selected')
        textFeild.innerHTML = 'What a nice keyboard! time to code with a mouse (Thier is no holes in the story here) '
        localStorage.setItem('item1','keyboard')
    }
}



let countPass = 3
let guesses = 1
function typePassword(inNum){


    
    if(countPass === 3){
        if(passwordBox.innerHTML === '242'){
            passScreen.classList.add('nonShow')
            codeScreen.classList.remove('nonShow')
            Dpassword = true
            textFeild.innerHTML = 'AAAAAAnd weeeeeee aaaaaaaaaare in'
            localStorage.setItem('Dpassword', 'true')

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

function selectItem(itembox){
    itembox.classList.toggle('selected')
    if(document.querySelectorAll('.selected').length === 3){
        pickUpItem('keyboard')
    }
    
}
i1.addEventListener('click', ()=>selectItem (i1))
i2.addEventListener('click', ()=>selectItem (i2))
i3.addEventListener('click', ()=>selectItem (i3))




function codeing(){

    if(localStorage.getItem('item1')=== 'keyboard'){
        let num = Math.floor(Math.random() * 3)

        if(num === 0){
            winWin.classList.remove('nonShow')
            passScreen.classList.add('nonShow')
            textFeild.innerHTML = "It works now! No more need for point and click games where pressing the 4 clear your items"
            localStorage.clear()
        }else{
            textFeild.innerHTML = "Darn the code didn't work this time, but let's try again"
        } 
    }else{
        textFeild.innerHTML = "I can't code a keyboard without a keyboard, need to get a keyboard built"
    }
    
}

async function desk(){
    if(localStorage.getItem('item1') === 'keyboard'){
        keyCase.classList.add('nonShow')
    }else if(localStorage.getItem('item1') === null){
        keyCase.addEventListener('click',() => pickUpItem('case'))
    }else if(localStorage.getItem('item1') === 'case'){
        i1.innerHTML = '<img id="case" src="img/keyboarddCase.svg" alt="Keyboardcase">'
        keyCase.classList.add('nonShow')
    }
    
}
desk();
async function computer(){

    if(localStorage.getItem('item1') === 'keyboard'){
        stateKeyboard.innerHTML = 'Keyboard Detected'
    }

    p1.addEventListener('click',() => typePassword('1'))
    p2.addEventListener('click',() => typePassword('2'))
    p3.addEventListener('click',() => typePassword('3'))
    p4.addEventListener('click',() => typePassword('4'))
    
    codeBut.addEventListener('click',()=>codeing())
}
computer();

async function hole(){
    if(localStorage.getItem('item1') === 'keyboard'){
        i1.innerHTML = '<img id="keyboard" src="img/keyboard.svg" alt="keyboard">'
    }
    if(localStorage.getItem('item2') === null){
        screwdriver.addEventListener('click',() => pickUpItem('screw'))
    }else if(localStorage.getItem('item3') === 'switch'){
        i3.innerHTML = '<img id="switch" src="img/switch.svg" alt="switch">'
        i2.innerHTML = '<img id="Screwdriver" src="img/screwdriverItem.svg" alt="screwdriver">'
        screwdriver.classList.add('nonShow')
    }else if(localStorage.getItem('item2') === 'screw' ){
        i2.innerHTML = '<img id="Screwdriver" src="img/screwdriverItem.svg" alt="screwdriver">'
        screwdriver.src = 'img/switch.svg'
        screwdriver.alt = 'switch'
        screwdriver.id = 'switchH'
        screwdriver.addEventListener('click',() => pickUpItem('switch'))

    }
    
}
hole();
