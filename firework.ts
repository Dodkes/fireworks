const mySvg = document.querySelector('svg')
const speed: number = 10 //speed in ms
const fireworkRadius: number = 2
const bodySelect = document.querySelector('body')
let stringX: string
let stringY: string
let stringR: string
let x: number = 0
let y: number = 500
 
let xArray: number[] = []

class Firework{
    x:number // kde sa vytvori objekt X
    y:number // kde sa vytvori objekt Y
    tox: number // kam ma smerovat tvorba objektov X
    toy: number // kam ma smerovat tvorba objektov Y
    el:SVGCircleElement
    color: string
    constructor(tox: number, toy: number, color: string){
        //this.x = window.innerWidth / 2 //kde sa vytvori objekt X - TU DAT RANDOM
        //this.y = window.innerHeight / 2 //kde sa vytvori objekt Y - TU DAT RANDOM
        this.x = x
        this.y = window.innerHeight / 3
        this.el = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
        mySvg.appendChild(this.el)
        attribute(this.el, this.x, this.y, fireworkRadius, '#ff66ff')
        this.tox = tox
        this.toy = toy
        this.color = color
    }
    update(){
        this.x += this.tox
        this.y += this.toy
        this.el = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
        mySvg.appendChild(this.el)
        attribute(this.el, this.x, this.y, fireworkRadius, '#ff66ff')
    }
}


// const firework1 = new Firework(2, 2, '#ff66ff')
// const firework2 = new Firework(2.8, 0, '#ff66ff')
// const firework3 = new Firework(2.4, 1, '#ff66ff')
// const firework4 = new Firework(1, 2.5, '#ff66ff')
// const firework5 = new Firework(0, 2.8, '#ff66ff')

//combinations vytvaram objekty -takze vytvart ich uz len cez tuto funkciu

function randomXCoordinateGenerator(){
    for (let i = 1; i < 10; i++){
        let numberToPush: number = window.innerWidth / i
        xArray.push(numberToPush)
    }
}

function randomXCoordinateSelector(){
    let randomNumber: number = Math.floor(Math.random() * xArray.length)
    x = xArray[randomNumber]

}

bodySelect.addEventListener('click', ()=>{
    combinations(2, 2, '#ff66ff')
    randomXCoordinateGenerator()
    randomXCoordinateSelector()
    xArray = []
})

function combinations(positive: number, negative: number, color: string){
    const a = new Firework(positive, -negative, color)
    const b = new Firework(-negative, positive, color)
    const c = new Firework(-negative, -negative, color)
    const d = new Firework(positive, positive, color)
    setInterval(()=>{ 
        a.update()
        b.update()
        c.update()
        d.update()
    }, speed)
}

function attribute(element: SVGCircleElement, posX: number, posY: number, radius: number, color: string){
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