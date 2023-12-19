let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}
// bibberen
let bibberen = document.querySelector('.shake')

bibberen.addEventListener('mouseover', bibbertje)

function bibbertje(){
  bibberen.classList.toggle('bibber')
}

// draaien
let draaien = document.querySelector('.turn')

draaien.addEventListener('mouseover', draaihem)

function draaihem(){
  draaien.classList.toggle('spin')
}
// floataround
let float = document.querySelector('.floataround')

float.addEventListener('mouseover', floatit)

function floatit(){
  float.classList.toggle('float')
}

// growit
let grow = document.querySelector('.grow')

grow.addEventListener('mouseover', growit)

function growit(){
  grow.classList.toggle('growit')
}

// rainbow
let rainbow = document.querySelector('.rainbow')

rainbow.addEventListener('mouseover', rainbowroad)

function rainbowroad(){
  rainbow.classList.toggle('road')
}

// rainbow
let disapear = document.querySelector('.hide')

disapear.addEventListener('mouseover', hideit)

function hideit(){
  disapear.classList.toggle('disapear')
}

// rainbow
let changeit = document.querySelector('.change')

changeit.addEventListener('mouseover', changeshape)

function changeshape(){
  changeit.classList.toggle('changeshape')
}