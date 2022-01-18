const mySvg = document.querySelector('svg')
const fireworkSpeed: number = 15
const fireworkWidth: number = 3
const fireworkSize: number = 100
const bodySelect = document.querySelector('body')
let x: number = 0
let y: number = 0
let xArray: number[] = []

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
        if(this.repeat < fireworkSize){
            this.delete()
            this.repeat++
            this.x += this.tox
            this.y += this.toy
            this.el = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
            mySvg.appendChild(this.el)
            if(this.repeat % 2 == 0){
                attribute(this.el, this.x, this.y, fireworkWidth, this.color)
            } else {
                attribute(this.el, this.x, this.y, fireworkWidth, 'black')
            }
            setTimeout(()=>{this.update()}, fireworkSpeed)
        } else {
        this.el.remove()
        }
    }
    delete(){
        this.el.style.opacity = '0'
        this.el.remove()
    }
}

const green: string = 'rgba(0, 255, 153, 1)'
const purple: string = 'rgba(140, 26, 255, 1)'
const gold: string = 'rgba(255, 204, 102, 1)'
const white: string = 'rgba(255, 255, 255, 1)'
const blue: string = 'rgba(51, 102, 255, 1)'
const red:  string = 'rgba(255, 102, 102, 1)'
const colorArray: string[] = [green, purple, gold, white, blue, red]

let color1: string = green
let color2: string = white

bodySelect.addEventListener('click', ()=> {
    randomColorSelector()
    randomXCoordinateGenerator()
    randomCoordinateSelector()
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
})

function randomColorSelector() {
    color1 = colorArray[Math.floor(Math.random()* 6)] 
    color2 = colorArray[Math.floor(Math.random()* 6)] 
}

function randomXCoordinateGenerator() {
    for (let i = 1; i < 10; i++) {
        let numberToPush: number = window.innerWidth / 10 * i
        xArray.push(numberToPush)
    }
}

function randomCoordinateSelector() {
    let randomNumber: number = Math.floor(Math.random() * xArray.length)
    x = xArray[randomNumber]
    let randomNumberY: number = Math.floor(Math.random()* 100)
    y = window.innerHeight / 3 - randomNumberY
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