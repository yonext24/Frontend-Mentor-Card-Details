const nameInput = document.querySelector('#name')
const nameCard = document.querySelector('#second')
const numberInput = document.querySelector('#card-number')
const numberCard = document.querySelector('#first')
const mmInput = document.querySelector('#MM')
const mmCard = document.querySelector('#third')
const yyInput = document.querySelector('#YY')
const yyCard = document.querySelector('#fifth')
const cvcInput = document.querySelector('#cvc')
const cvcCard = document.querySelector('.backtext')
const subButton = document.querySelector('.sub')

nameInput.addEventListener('input', e => {
  const text = nameInput.value
  if (text.length > 25) {
    preventDefault()
  }
  console.log(text !== '')
  if (text === '') {
    nameCard.textContent = 'Jane Appleseed'
  }
  nameCard.textContent = text
})
nameInput.addEventListener('keydown', (e) => {
  const num = e.target.value
  if(num.length > 24 && e.keyCode !== 8) {
    e.preventDefault()
  }
})
numberInput.addEventListener('input', e => {
  if (numberInput.value.length > 16) {
    preventDefault()
  }
  let number = numberInput.value
  // Add the 0s to the string
  number = number.padEnd(16, '0')
  // Convert into an array to add spaces
  number = number.split('')
  // Add the spaces
  number[3] += ' '
  number[7] += ' '
  number[11] += ' '
  number = number.toString()
  // Convert into a string an replace the ','s
  number = number.replace(/,/g,"")
  numberCard.textContent = number
})
numberInput.addEventListener('keydown', (e) => {
  const num = e.target.value
  if(num.length > 15 && e.keyCode !== 8) {
    e.preventDefault()
  }
})
function yyaa (x, y) {
  let $ = x.value
  $ = $.padEnd(2, '0')
  y.textContent = $
}
yyInput.addEventListener('keydown', (e) => {
  const num = e.target.value
  if(num.length > 1 && e.keyCode !== 8) {
    e.preventDefault()
  }
})
mmInput.addEventListener('keydown', (e) => {
  const num = e.target.value
  if(num.length > 1 && e.keyCode !== 8) {
    e.preventDefault()
  }
})

yyInput.addEventListener('input', () => { yyaa(yyInput, yyCard) })
mmInput.addEventListener('input', () => { yyaa(mmInput, mmCard) })

cvcInput.addEventListener('input', e => {
  const text = cvcInput.value
  console.log(text !== '')
  if (text === '') {
    cvcCard.textContent = 'Jane Appleseed'
  }
  cvcCard.textContent = text
})
cvcInput.addEventListener('keydown', (e) => {
  const num = e.target.value
  if(num.length > 2 && e.keyCode !== 8) {
    e.preventDefault()
  }
})
subButton.addEventListener('click', () => {
  subButton.preventDefault()
})