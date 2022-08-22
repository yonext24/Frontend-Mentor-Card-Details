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
const modal = document.getElementById('modal')
const hiddeModal = document.querySelector('.modal__button')

function formValidation () {
  if (nameInput.value.length < 4) {
    alert('You need more than 3 digits in your name')
    return false
  }
  if (numberInput.value.length !== 16) {
    alert('You need 16 numbers in your card')
    return false
  }
  if (mmInput.value.length !== 2) {
    alert('You need 2 numbers in your MM')
    return false
  }
  if (yyInput.value.length !== 2) {
    alert('You need 2 numbers in your YY')
    return false
  }
  if (cvcInput.value.length !== 3) {
    alert('You need 3 numbers in your CVC')
    return false
  }
  return true
}

nameInput.addEventListener('input', e => {
  const text = nameInput.value
  if (text.length > 25) {
    preventDefault()
  }
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
subButton.addEventListener('click', (e) => {
  e.preventDefault()
  if (!formValidation()) {
    return
  }
  modal.classList.add('mostrar')
})
hiddeModal.addEventListener('click', (e) => {
  e.preventDefault()
  modal.classList.remove('mostrar')
  setTimeout(() => {
    window.location.reload()
  }, 3000)
})