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
  console.log(text !== '')
  if (text === '') {
    nameCard.textContent = 'Jane Appleseed'
  }
  nameCard.textContent = text
})
numberInput.addEventListener('input', e => {
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
function yyaa (x, y) {
  let $ = x.value
  $ = $.padEnd(2, '0')
  y.textContent = $
}

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
subButton.addEventListener('click', () => {
  subButton.preventDefault()
})