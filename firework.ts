const mySvg = document.querySelector('svg')
const fireworkSpeed: number = 15
const fireworkWidth: number = 3
const fireworkSize: number = 100
const bodySelect = document.querySelector('body')
let x: number = 0
let y: number = 0
let xArray: number[] = []
let randomHeight: number

class Firework {
    repeat: number
    x: number 
    y: number 
    tox: number 
    toy: number 
    el:SVGCircleElement
    color: string
    constructor(tox: number, toy: number, color: string) {
        this.repeat = 0
        this.x = x
        this.y = y
        this.el = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
        mySvg.appendChild(this.el)
        attribute(this.el, this.x, this.y, fireworkWidth, this.color)
        this.tox = tox
        this.toy = toy
        this.color = color
    }
    update() {
        if (this.repeat < fireworkSize) {
            this.delete()
            this.repeat++
            this.x += this.tox
            this.y += this.toy
            this.el = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
            mySvg.appendChild(this.el)
            if(this.repeat % 2 == 0) {
                attribute(this.el, this.x, this.y, fireworkWidth, this.color)
            } 
            setTimeout(()=>{ this.update() }, fireworkSpeed)
        } else {
        this.el.remove()
        }
    }
    delete() {
        this.el.style.opacity = '0'
        this.el.remove()
    }
}

class Bullet {
     el: SVGCircleElement
     x: number = window.innerWidth / 2
     y: number = window.innerHeight
     tox: number
     toy: number
     repeat: number
     constructor(tox: number, toy: number) {
        this.repeat = 0
        this.tox = tox
        this.toy = toy
        this.el = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
        mySvg.appendChild(this.el)
        attribute(this.el, this.x, this.y, fireworkWidth-1.5, 'gold')
     }
     updateBullet() {
        if(this.repeat < randomHeight) {
            this.repeat++
            this.el.remove()
            this.x += this.tox
            this.y -= this.toy
            this.el = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
            mySvg.appendChild(this.el)
            attribute(this.el, this.x, this.y, fireworkWidth-1.5, 'rgb(255, 255, 102)')
            setTimeout(()=>{ this.updateBullet() }, fireworkSpeed)
        } else {
            this.el.remove()
            x = this.x
            y = this.y
            firework()
        }
     }
 }

function responsiveHeight(){
    if(window.innerHeight < 800) {
        randomHeight = randomNumber(40, 60)
    } else {
        randomHeight = randomNumber(50, 80)
    }
}

const green: string = 'rgba(153, 255, 153, 1)'
const purple: string = 'rgba(102, 0, 255, 1)'
const gold: string = 'rgba(255, 204, 102, 1)'
const white: string = 'rgba(255, 255, 255, 1)'
const blue: string = 'rgba(51, 102, 255, 1)'
const red:  string = 'rgba(255, 0, 0, 1)'
const colorArray: string[] = [green, purple, gold, white, blue, red]

let color1: string = green
let color2: string = white

bodySelect.addEventListener('click', ()=> {
    responsiveHeight()
    let randomX: number
    if(window.innerWidth < 500) {
        randomX = randomNumber(-3, 3)
    } else {
        randomX = randomNumber(-7, 7) //rozptyl fireworkov/bulletov
    }
    const bullet = new Bullet(randomX, 10)
    bullet.updateBullet()
})

function firework() {
    randomColorSelector()
    xArray = []
    combinations(2, 2, color1)
    combinations(-2, -2, color1)
    combinations(2, -2, color1)
    combinations(-2, 2, color1)
    combinations(2.8, 0, color1)
    combinations(0, 2.8, color1)
    combinations(0, -2.8, color1)
    combinations(-2.8, 0, color1)
    combinations(2.4, 1, color2)
    combinations(-2.4, -1, color2)
    combinations(2.4, -1, color2)
    combinations(-2.4, 1, color2)
    combinations(1, 2.5, color2)
    combinations(-1, -2.5, color2)
    combinations(1, -2.5, color2)
    combinations(-1, 2.5, color2)
}
function randomColorSelector() {
    color1 = colorArray[randomNumber(0, 5)]
    color2 = colorArray[randomNumber(0, 5)]
}

function combinations (positive: number, negative: number, color: string) {
        const createFirework = new Firework(positive, -negative, color)
        createFirework.update()
}

let stringX: string
let stringY: string
let stringR: string

function attribute(element: SVGCircleElement, posX: number, posY: number, radius: number, color: string) {
    mySvg.appendChild(element)
    if (typeof(posX) === 'number') { //TS doesnt allow us to assign number to string numbers
        stringX = posX.toString()
        stringY = posY.toString()
        stringR = radius.toString()
    } 
    element.setAttribute('cx', stringX)
    element.setAttribute('cy', stringY)
    element.setAttribute('r', stringR)
    element.setAttribute('fill', color)
}

function randomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}