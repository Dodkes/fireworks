const numberStars = 50
const sky = document.getElementById('sky')
let stars: {width: number, height: number, posX: number, posY: number}[] = []

class Star{
    width: number
    height: number
    posX: number
    posY: number
    constructor(width: number, height: number, posX: number, posY: number){
        this.width = width
        this.height = height
        this.posX = posX
        this.posY = posY
    }
}

//objects creation loop
for (let i: number = 0; i < numberStars; i++) {
    let randomSize: number = Math.floor(Math.random() * 3 + 1)
    let randomPosX: number = Math.floor(Math.random() * 100)
    let randomPosY: number = Math.floor(Math.random() * 100)
    stars.push(new Star(randomSize, randomSize, randomPosX, randomPosY))
}

//star creation based on objects loop
for (let j: number = 0; j < stars.length; j++) {
    let star = document.createElement('div')
    sky.appendChild(star)
    star.classList.add('big')
}