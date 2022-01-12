const mySvg = document.querySelector('svg')
const fireworkDots: number = 90 //this should be used as animation - interval function
const speed: number = 100 //speed in ms
const fireworkRadius: number = 2
const bodySelect = document.querySelector('body')
let stringX: string
let stringY: string
let stringR: string
let circles: SVGCircleElement[] = []


let randomX:number = Math.floor(Math.random() * 500)

bodySelect.addEventListener('click', ()=>{
    setInterval( ()=> {fireworkLoop1(2, 2, '#ff66ff')}, speed)
    setInterval( ()=> {fireworkLoop2(2.8, 0, '#ff66ff')}, speed)
    setInterval( ()=> {fireworkLoop3(2.5, 1, '#ff66ff')}, speed)
    setInterval( ()=> {fireworkLoop4(1, 2.5, '#ff66ff')}, speed)
    setInterval( ()=> {fireworkLoop5(0, 2.8, '#ff66ff')}, speed)
})

//FUNCTIONS FOR EACH 4 POSITIVE/NEGATIVE COMBINATIONS OF FIREWORK COORDINATES
//COMBINATIONS 1 - 4
let pos1X: number = randomX
let pos1Y: number = 300
let pos2X: number = pos1X
let pos2Y: number = pos1Y
let pos3X: number = pos1X
let pos3Y: number = pos1Y
let pos4X: number = pos1X
let pos4Y: number = pos1Y

function fireworkLoop1(whereX: number, whereY: number, color: string) {
    let k = 0

    pos1X+= whereX
    pos1Y+= whereY
    circles[k] = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
    attribute(circles[k], pos1X, pos1Y, fireworkRadius, color)
    k++

    pos2X-= whereX
    pos2Y-= whereY
    circles[k] = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
    attribute(circles[k], pos2X, pos2Y, fireworkRadius, color)
    k++

    pos3X+= whereX
    pos3Y-= whereY
    circles[k] = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
    attribute(circles[k], pos3X, pos3Y, fireworkRadius, color)
    k++

    pos4X-= whereX
    pos4Y+= whereY
    circles[k] = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
    attribute(circles[k], pos4X, pos4Y, fireworkRadius, color)
}
//COMBINATIONS 5 - 8
let pos5X: number = pos1X
let pos5Y: number = pos1Y
let pos6X: number = pos1X
let pos6Y: number = pos1Y
let pos7X: number = pos1X
let pos7Y: number = pos1Y
let pos8X: number = pos1X
let pos8Y: number = pos1Y

function fireworkLoop2(whereX: number, whereY: number, color: string){
    let k = 0

    pos5X+= whereX
    pos5Y+= whereY
    circles[k] = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
    attribute(circles[k], pos5X, pos5Y, fireworkRadius, color)
    k++

    pos6X-= whereX
    pos6Y-= whereY
    circles[k] = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
    attribute(circles[k], pos6X, pos6Y, fireworkRadius, color)
    k++

    pos7X+= whereX
    pos7Y-= whereY
    circles[k] = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
    attribute(circles[k], pos7X, pos7Y, fireworkRadius, color)
    k++

    pos8X-= whereX
    pos8Y+= whereY
    circles[k] = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
    attribute(circles[k], pos8X, pos8Y, fireworkRadius, color)

}
//COMBINATIONS 9-12
let pos9X: number = pos1X
let pos9Y: number = pos1Y
let pos10X: number = pos1X
let pos10Y: number = pos1Y
let pos11X: number = pos1X
let pos11Y: number = pos1Y
let pos12X: number = pos1X
let pos12Y: number = pos1Y

function fireworkLoop3(whereX: number, whereY: number, color: string){
    let k = 0

    pos9X+= whereX
    pos9Y+= whereY
    circles[k] = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
    attribute(circles[k], pos9X, pos9Y, fireworkRadius, color)
    k++

    pos10X-= whereX
    pos10Y-= whereY
    circles[k] = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
    attribute(circles[k], pos10X, pos10Y, fireworkRadius, color)
    k++

    pos11X+= whereX
    pos11Y-= whereY
    circles[k] = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
    attribute(circles[k], pos11X, pos11Y, fireworkRadius, color)
    k++

    pos12X-= whereX
    pos12Y+= whereY
    circles[k] = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
    attribute(circles[k], pos12X, pos12Y, fireworkRadius, color)

}
//COMBINATIONS 13 - 16
let pos13X: number = pos1X
let pos13Y: number = pos1Y
let pos14X: number = pos1X
let pos14Y: number = pos1Y
let pos15X: number = pos1X
let pos15Y: number = pos1Y
let pos16X: number = pos1X
let pos16Y: number = pos1Y

function fireworkLoop4(whereX: number, whereY: number, color: string){
    let k = 0

    pos13X+= whereX
    pos13Y+= whereY
    circles[k] = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
    attribute(circles[k], pos13X, pos13Y, fireworkRadius, color)
    k++

    pos14X-= whereX
    pos14Y-= whereY
    circles[k] = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
    attribute(circles[k], pos14X, pos14Y, fireworkRadius, color)
    k++

    pos15X+= whereX
    pos15Y-= whereY
    circles[k] = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
    attribute(circles[k], pos15X, pos15Y, fireworkRadius, color)
    k++

    pos16X-= whereX
    pos16Y+= whereY
    circles[k] = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
    attribute(circles[k], pos16X, pos16Y, fireworkRadius, color)

}
//COMBINATIONS 17 - 20
let pos17X: number = pos1X
let pos17Y: number = pos1Y
let pos18X: number = pos1X
let pos18Y: number = pos1Y
let pos19X: number = pos1X
let pos19Y: number = pos1Y
let pos20X: number = pos1X
let pos20Y: number = pos1Y

function fireworkLoop5(whereX: number, whereY: number, color: string){
    let k = 0

    pos17X+= whereX
    pos17Y+= whereY
    circles[k] = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
    attribute(circles[k], pos17X, pos17Y, fireworkRadius, color)
    k++

    pos18X-= whereX
    pos18Y-= whereY
    circles[k] = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
    attribute(circles[k], pos18X, pos18Y, fireworkRadius, color)
    k++

    pos19X+= whereX
    pos19Y-= whereY
    circles[k] = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
    attribute(circles[k], pos19X, pos19Y, fireworkRadius, color)
    k++

    pos20X-= whereX
    pos20Y+= whereY
    circles[k] = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
    attribute(circles[k], pos20X, pos20Y, fireworkRadius, color)

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