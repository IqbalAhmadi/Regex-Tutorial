let textString = document.getElementById('textStringBox')
let answerBox = document.getElementById('answerBox')
let numLen = document.getElementById('selectNum')
let search = document.getElementById('searchBox')
const regex = document.getElementById('regexBTN')

regex.addEventListener('click', searchThru)

function searchThru() {
  let i = numLen.value
  console.log('i is equal to ' + i)

  if (i === 2) {
    let retwo = /\b\w{2,2}\b/
    answerBox.textContent = retwo.exec(textString.value)
    console.log(answerBox.textContent)
  } else if (i === 3) {
    let rethree = /\b\w{3,3}\b/
    answerBox.textContent = rethree.exec(textString.value)
    console.log(answerBox.textContent)
  } else if (i === 4) {
    let refour = /\b\w{4,4}\b/
    answerBox.textContent = refour.exec(textString.value)
    console.log(answerBox.textContent)
  } else if (numLen.value === 5) {
    let refive = /\b\w{5,5}\b/
    answerBox.textContent = refive.exec(textString.value)
    console.log(answerBox.textContent)
  } else {
    console.log('button clicked')
    console.log('length is ' + numLen.value)
  }
}
