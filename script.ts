const numberStars: number = 50
const sky = document.getElementById('sky')
let stars: {size: number, posX: number, posY: number}[] = []

class Star{
    size: number
    posX: number
    posY: number
    constructor(size: number, posX: number, posY: number){
        this.size = size
        this.posX = posX
        this.posY = posY
    }
}

//objects creation loop
for (let i: number = 0; i < numberStars; i++) {
    let randomSize: number = Math.floor(Math.random() * 3 + 1)
    let randomPosX: number = Math.floor(Math.random() * 100)
    let randomPosY: number = Math.floor(Math.random() * 80)
    stars.push(new Star(randomSize, randomPosX, randomPosY))
}

//star creation based on objects loop
for (let j: number = 0; j < stars.length; j++) {
    let star: HTMLElement = document.createElement('div')
    createStars(star, j)
    sizingStars(star, j)
}

function createStars(myStar: HTMLElement, i: number){
    sky.appendChild(myStar)
    myStar.style.backgroundColor = 'white'
    myStar.classList.add('big') //docasne
    myStar.style.left = stars[i].posX + '%'
    myStar.style.top = stars[i].posY + 'vh'
}

function sizingStars(myStar: HTMLElement, i: number){
    switch(stars[i].size){
        case 1:
            console.log('1')
            break
        case 2:
            console.log('2')
            break
        case 3:
            console.log('3')
            break
    }
}