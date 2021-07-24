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
            //row
            i==0&&[0,1,2].includes(j)||i==1&&[0,1,2].includes(j)||i==2&&[0,1,2].includes(j)?cell.classList.add("row0"):
            i==0&&[3,4,5].includes(j)||i==1&&[3,4,5].includes(j)||i==2&&[3,4,5].includes(j)?cell.classList.add("row1"):
            i==0&&[6,7,8].includes(j)||i==1&&[6,7,8].includes(j)||i==2&&[6,7,8].includes(j)?cell.classList.add("row2"):
            i==3&&[0,1,2].includes(j)||i==4&&[0,1,2].includes(j)||i==5&&[0,1,2].includes(j)?cell.classList.add("row3"):
            i==3&&[3,4,5].includes(j)||i==4&&[3,4,5].includes(j)||i==5&&[3,4,5].includes(j)?cell.classList.add("row4"):
            i==3&&[6,7,8].includes(j)||i==4&&[6,7,8].includes(j)||i==5&&[6,7,8].includes(j)?cell.classList.add("row5"):
            i==6&&[0,1,2].includes(j)||i==7&&[0,1,2].includes(j)||i==8&&[0,1,2].includes(j)?cell.classList.add("row6"):
            i==6&&[3,4,5].includes(j)||i==7&&[3,4,5].includes(j)||i==8&&[3,4,5].includes(j)?cell.classList.add("row7"):
            i==6&&[6,7,8].includes(j)||i==7&&[6,7,8].includes(j)||i==8&&[6,7,8].includes(j)?cell.classList.add("row8"):null
            //col
            i==0&&[0,3,6].includes(j)||i==3&&[0,3,6].includes(j)||i==6&&[0,3,6].includes(j)?cell.classList.add("col0"):
            i==0&&[1,4,7].includes(j)||i==3&&[1,4,7].includes(j)||i==6&&[1,4,7].includes(j)?cell.classList.add("col1"):
            i==0&&[2,5,8].includes(j)||i==3&&[2,5,8].includes(j)||i==6&&[2,5,8].includes(j)?cell.classList.add("col2"):
            i==1&&[0,3,6].includes(j)||i==4&&[0,3,6].includes(j)||i==7&&[0,3,6].includes(j)?cell.classList.add("col3"):
            i==1&&[1,4,7].includes(j)||i==4&&[1,4,7].includes(j)||i==7&&[1,4,7].includes(j)?cell.classList.add("col4"):
            i==1&&[2,5,8].includes(j)||i==4&&[2,5,8].includes(j)||i==7&&[2,5,8].includes(j)?cell.classList.add("col5"):
            i==2&&[0,3,6].includes(j)||i==5&&[0,3,6].includes(j)||i==8&&[0,3,6].includes(j)?cell.classList.add("col6"):
            i==2&&[1,4,7].includes(j)||i==5&&[1,4,7].includes(j)||i==8&&[1,4,7].includes(j)?cell.classList.add("col7"):
            i==2&&[2,5,8].includes(j)||i==5&&[2,5,8].includes(j)||i==8&&[2,5,8].includes(j)?cell.classList.add("col8"):null

            cell.innerText = (i).toString()+"x"+(j).toString()
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