const mySvg = document.querySelector('svg')
const fireworkDots: number = 1 
let stringX: string
let stringY: string
let stringR: string

for(let k = 0; k < fireworkDots; k++) {
    let circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
    attribute(circle, 505, 500, 10, 'rgba(0, 255, 255, 0.5)')
}



function attribute(element: SVGCircleElement, posX: number, posY: number, radius: number, color: string){
    mySvg.appendChild(element)
    if(typeof(posX) === 'number') { //TS dont allow us to assign number to string numbers
        stringX = posX.toString()
        stringY = posY.toString()
        stringR = radius.toString()
    }  
    element.setAttribute('cx', stringX)
    element.setAttribute('cy', stringY)
    element.setAttribute('r', stringR)
    element.setAttribute('fill', color)
}