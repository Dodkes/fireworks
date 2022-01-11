const mySvg = document.querySelector('svg')
const fireworkDots: number = 90 //this should be used as animation - interval function
let stringX: string
let stringY: string
let stringR: string
let circles: SVGCircleElement[] = []
let posX: number = 500
let posY: number = 300

createFirework(0, 2.8, '#ff66ff')
createFirework(1.7, 2.5, '#ff66ff') //posledne pridane
createFirework(2.8, 0 ,'#ffccff')
createFirework(2, 2, '#ffe6ff')
createFirework(2.5, 1, '#ffccff')
createFirework(1, 2.5, '#ffe6ff')

function createFirework(a: number, b:number, color: string){
    fireworkLoop(a, b, color)
    fireworkLoop(-a, -b, color)
    fireworkLoop(-a, b, color)
    fireworkLoop(a, -b, color)
    fireworkLoop(a, b, color)
}

function fireworkLoop(whereX: number, whereY: number, color: string) {
    for (let k = 0; k < fireworkDots; k++) {
        posX+= whereX
        posY+= whereY
        circles[k] = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
        attribute(circles[k], posX, posY, 1, color)
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