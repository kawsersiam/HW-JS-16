let lightDark = document.querySelector('.lightDark')
let body = document.querySelector('body')
let Headding = document.querySelector('h2')

function darkMode () {
    body.classList.toggle('darkMode')
 
    if (body.classList.contains('darkMode')==true) {
 
        Headding.innerHTML = 'Dark Mode'
    }else{
        Headding.innerHTML = 'Light Mode'

    }
}
lightDark.addEventListener('click', darkMode)






let flowers =[
    'rose',
    'sun flower',
    'water lily',
    'Tulip',
    'jasmine'

]

flowers.forEach(flower => {
    console.log(`I love ${flower}`)
});


for(let i = 2023 ; i >= 2000 ; i--) {
    console.log(i)
}



//todo cursor editing
let cursorPointer = document.querySelector('.cursorPoint')
let smallCursor = document.querySelector('.smallCursor')
let midCursor = document.querySelector('.midCursor')

function mouseCursor (event) {

    let topValue = event.clientY;
    let leftValue = event.clientX;
     
    cursorPointer.style.top = `${topValue}px`
    cursorPointer.style.left = `${leftValue}px`
    smallCursor.style.top = `${topValue}px`
    smallCursor.style.left = `${leftValue}px`
    midCursor.style.top = `${topValue}px`
    midCursor.style.left = `${leftValue}px`
}

window.addEventListener('mousemove' , mouseCursor)


