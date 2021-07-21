const game = document.getElementById("game")
const numpad = document.querySelector(".numpad")
const gameSize = 9 //row
const boxSize = 3
const numpadSize = 3
let gameArr = []

const generateGame = () => {
    for (let i = 0; i < gameSize; i++) {
        let boxArr = []
        let box = document.createElement("div")
        box.classList.add(`box`,`box${i}`)
        for (let j = 0; j < Math.pow(boxSize, 2); j++) {
            boxArr.push((i+1).toString()+(j+1).toString())
            let cell = document.createElement("div")
            cell.innerText = (i+1).toString()+"x"+(j+1).toString()
            cell.classList.add(`cell`, `cell${j}`)
            box.appendChild(cell)
        }
        gameArr.push(boxArr)
        game.appendChild(box)
    }
    console.log(gameArr);
}

const generateNumpad = () => {
    for (let i = 0; i < numpadSize; i++) {
        for (let j = 0; j < numpadSize; j++) {
            let cell = document.createElement("div")
            cell.classList.add("numpad-cell", `number${(i+1)*(j+1)}`)
            cell.innerText = `${(i+1)*(j+1)}`
            numpad.appendChild(cell)
        }
    }
    console.log(numpad);
}