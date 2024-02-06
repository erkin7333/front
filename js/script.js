let homeBtn = document.getElementById('homebtn')
let designBtn = document.getElementById('designbtn')
let blogBtn = document.getElementById('blogbtn')
let aboutBtn = document.getElementById('aboutbtn')
let text = document.getElementsByTagName('span')[0]
let textBtna = document.getElementsByTagName('a')[0]
console.log(text)
console.log(textBtna)
let searchBtn = document.getElementsByClassName('search-btn')
console.log(searchBtn[0])

// Javascriptda elemetdagi kontentlani uzgartirish birinchi usuli
function hover() {
    textBtna.textContent = "Flutter"
}

// Javascriptda elemetdagi kontentlani uzgartirish ikkinchi usuli

// text.onmouseenter = hover
// textBtna.onmouseenter = hover

// Javascriptda elemetdagi kontentlani uzgartirish uchinchi usuli
//  Eng qulay usuli shu

text.addEventListener('mouseenter', function () {
    text.textContent = 'Java'
})
text.addEventListener('mouseleave', function () {
    text.textContent = 'Python'
})