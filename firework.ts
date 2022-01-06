const mySvg = document.querySelector('svg')
const fireworkDots: number = 80 
let stringX: string
let stringY: string
let stringR: string
let circles: SVGCircleElement[] = []

let posX: number = 500
let posY: number = 300

fireworkLoop(2, 2)
fireworkLoop(-2, -2)
fireworkLoop(-2, 2)
fireworkLoop(2, -2)

fireworkLoop(0, -2.8)
fireworkLoop(0, 2.8)
fireworkLoop(-2.8, 0)
fireworkLoop(2.8, 0)

fireworkLoop(2.5, 1)
fireworkLoop(1, 2.5)
fireworkLoop(-1, 2.5)
fireworkLoop(1, -2.5)
fireworkLoop(1, 2.5)

fireworkLoop(-1, -2.5)
fireworkLoop(-2.5, 1)
fireworkLoop(-2.5, -1)
fireworkLoop(2.5, -1)

function fireworkLoop(whereX: number, whereY: number){
    for (let k = 0; k < fireworkDots; k++) {
        posX+= whereX
        posY+= whereY
        circles[k] = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
        attribute(circles[k], posX, posY, 4, 'rgba(0, 255, 255, 1)')
    }
    posX = 500
    posY = 300
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