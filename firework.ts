const mySvg = document.querySelector('svg')
const fireworkSpeed: number = 50
const fireworkWidth: number = 2
const fireworkSize: number = 20
const bodySelect = document.querySelector('body')
let x: number = 0
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
        this.y = window.innerHeight / 3
        this.el = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
        mySvg.appendChild(this.el)
        attribute(this.el, this.x, this.y, fireworkWidth, this.color)
        this.tox = tox
        this.toy = toy
        this.color = color
    }
    update(){
        if(this.repeat < fireworkSize){
            this.repeat++
            this.x += this.tox
            this.y += this.toy
            this.el = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
            mySvg.appendChild(this.el)
            attribute(this.el, this.x, this.y, fireworkWidth, this.color)
        } else {
            clearInterval()
        }
    }
}

bodySelect.addEventListener('click', ()=> {
    randomXCoordinateGenerator()
    randomXCoordinateSelector()
    xArray = []
    combinations(2, 2, '#ff66ff')
})

//Problem je asi v tom ze taha udaje x, y z 1 objektu, nemusi to tak ale byt -> pre skusku vykonzolovat suradnice kam sa to vytvara
//Pretoze mam vytvorene len 4 objekty, tym padom skusit aj vytvorit nove objekty pre nove ciary

// const firework1 = new Firework(2, 2, '#ff66ff')
// const firework2 = new Firework(2.8, 0, '#ff66ff')
// const firework3 = new Firework(2.4, 1, '#ff66ff')
// const firework4 = new Firework(1, 2.5, '#ff66ff')
// const firework5 = new Firework(0, 2.8, '#ff66ff')
//combinations vytvaram objekty -takze vytvart ich uz len cez tuto funkciu


function randomXCoordinateGenerator() {
    for (let i = 1; i < 10; i++){
        let numberToPush: number = window.innerWidth / 10 * i
        xArray.push(numberToPush)
    }
}

function randomXCoordinateSelector(){
    let randomNumber: number = Math.floor(Math.random() * xArray.length)
    x = xArray[randomNumber]
}

function combinations (positive: number, negative: number, color: string){
    const a = new Firework(positive, -negative, color)
    const b = new Firework(-negative, positive, color)
    const c = new Firework(-negative, -negative, color)
    const d = new Firework(positive, positive, color)
    setInterval(()=>{ 
        a.update()
        b.update()
        c.update()
        d.update()
    }, fireworkSpeed)
}

let stringX: string
let stringY: string
let stringR: string

function attribute(element: SVGCircleElement, posX: number, posY: number, radius: number, color: string) {
    mySvg.appendChild(element)
    if (typeof(posX) === 'number') { //TS dont allow us to assign number to string numbers
        stringX = posX.toString()
        stringY = posY.toString()
        stringR = radius.toString()
    } 
    element.setAttribute('cx', stringX)
    element.setAttribute('cy', stringY)
    element.setAttribute('r', stringR)
    element.setAttribute('fill', color)
}