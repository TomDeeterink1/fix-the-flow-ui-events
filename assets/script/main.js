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