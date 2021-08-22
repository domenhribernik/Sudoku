const game = document.getElementById("game")
const numpad = document.querySelector(".numpad")
const gameSize = 9 //row
const boxSize = 3
const numpadSize = 3
let gameArr = []
let rangeArr = []
let selectedCell
let newValue

document.addEventListener('keypress', e => {
  var name = e.key;
  var code = e.keyCode;
  if (code>=49 && code<=57) {
    selectedCell.innerText = name
    console.log(`Key pressed ${name} \r\n Key code value: ${code}`);
  }
})

let gameLoader = () => {
  generateGame()
  generateNumpad()
  document.addEventListener('click', e => {
    e.target.classList.contains("cell")?changeSquare(e):game.childNodes.forEach(el => el.childNodes.forEach(element => element.style.background="white"))
  })
}

let generateGame = () => {
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
            //cell.innerText = (i).toString()+"x"+(j).toString()
            cell.classList.add(`cell`, `cell${i}`)
            box.appendChild(cell)
        }
        gameArr.push(boxArr)
        game.appendChild(box)
    }
    console.log(gameArr);
}

let generateNumpad = () => {
    for (let i = 0; i < numpadSize; i++) {
        for (let j = 0; j < numpadSize; j++) {
            let cell = document.createElement("div")
            cell.addEventListener("click", changeContent)
            cell.classList.add("numpad-cell", `number${(i+1)*(j+1)}`)
            cell.innerText = `${(i)*3+(j+1)}`
            numpad.appendChild(cell)
        }
    }
    console.log(numpad);
}

let colorGrid = () => {
  rangeArr.forEach(e => e.style.background = "#E2EBF3")
  Array.from(game.getElementsByClassName("cell")).forEach(e => e.innerText !== "" && e.innerText === selectedCell.innerText?e.style.background="#BCDFF9":null)
  selectedCell.style.background = "#BCDFF9"
}

let changeSquare = e => {
  game.childNodes.forEach(e => e.childNodes.forEach(el => el.style.background = "white"))
  selectedCell = e.target
  rangeArr = Array.from(game.getElementsByClassName(selectedCell.classList[0])).concat(Array.from(game.getElementsByClassName(selectedCell.classList[1])), Array.from(game.getElementsByClassName(selectedCell.classList[3])))
  colorGrid()
}
//fix hilighting issue (keybord, mouse click, all numbers outlined, ALL ACTIONS HAVE TO HAVE HILIGHT UPDATE)
//mini helper letters (make)
//added numbers not bold!!!

//expand medium
//expand hard
//extreme??

//get sudoku array(make)
//randomize sudoku (fresh effect) 
//!!MAKE THE SOLUTION WORK WITH IT!!
//3. move the rows/columns that are in the same box (3x3)

let changeContent = e => {
  if (selectedCell) {
    newValue = e.target.innerText
    if(rangeArr.map(e => e.innerText).includes(newValue)) {
      selectedCell.innerText = newValue
      rangeArr.forEach(el => el.innerText===newValue?el.style.color="red":el.style.color="black")
    }
    else {
      selectedCell.innerText = newValue
      rangeArr.forEach(el => el.style.color="black")
    }
    Array.from(game.getElementsByClassName("cell")).forEach(e => e.innerText === selectedCell.innerText?e.style.background="#BCDFF9":null)
  }
}

let index = -1
let sudokuData = []
let solutionData = []

let restart = () => {
  index-=1
  loadPuzzle()
}

let loadPuzzle = (arr) => {
  index+=1
  console.log("Puzzle: "+index);
  arr ? sudokuData = arr : sudokuData=easySudoku[index][0]
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      game.childNodes[i].childNodes[j].innerText = sudokuData[i][j]==="0"?"":sudokuData[i][j]
      //check unique numbers - console.log(easySudoku[index][1][0].split("").sort())
    }
  }
}

let solutionPuzzle = () => {
  solutionData = easySudoku[index][1]
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      game.childNodes[i].childNodes[j].innerText = solutionData[i][j]==="0"?"":solutionData[i][j]
    }
  }
}

let orderSolution = () => {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      game.childNodes[i].childNodes[j].innerText = easySudoku[index][1][i][j]==="0"?"":easySudoku[index][1][i].split("").sort()[j]
    }
  }
}

let rotation = 0
let rotate = () => { //fix the rotation (only one rotation is good) and add solution rotation
  console.log(sudokuData);
  let newArr = []
  sudokuData.map((e, i, arr) => i<3?arr[(i+1)*3-1]:i>5?arr[(i-6)*3]:i==3?arr[i-2]:i==5?arr[i+2]:e).map(el => newArr.push([...el].map((e, i, arr) => i<3?arr[(i+1)*3-1]:i>5?arr[(i-6)*3]:i==3?arr[i-2]:i==5?arr[i+2]:e).join("")))
  console.log(newArr);
  sudokuData = newArr
  index-=1
  rotation < 3 ? rotation++ : rotation = 0
  console.log("Rotation: " + rotation)
  loadPuzzle(sudokuData)
}

let mapNumbers = () => {
  let [numbers, mappedNumbers] = [[],[]]
  for (let i = 1; i < 10; i++) {
    numbers.push(i) 
    while (true) {
      let rnd = Math.round(Math.random() * 10)
      if (rnd != numbers[i]&&!mappedNumbers.includes(rnd)&&rnd>0&&rnd<10) {
        mappedNumbers.push(rnd)
        break
      }
    }
  }
  sudokuData = sudokuData.map(e => [...e].map(el => el=="0"?0:mappedNumbers[numbers.indexOf(parseInt(el))]).join(""))
  index-=1
  loadPuzzle(sudokuData)
  console.log("Mapped numbers: ")
  mappedNumbers.forEach(e => console.log(numbers[mappedNumbers.indexOf(e)] + " = " + e))
}

let shuffleRows = () => {
  let [rowArr, colArr, mapRowArr, mapColArr] = [[[],[],[]],[[],[],[]],[[],[],[]],[[],[],[]]]
  for (let i = 0; i < 9; i++) {
    rowArr[i<3?0:i<6?1:2].push(Array.from(document.querySelectorAll(`.row${i}`)).map(e => e.innerText==0?"0":e.innerText))
    colArr[[i<3?0:i<6?1:2]].push(Array.from(document.querySelectorAll(`.col${i}`)).map(e => e.innerText==0?"0":e.innerText))
  }
  for (let i = 0; i < 9; i++) { //strange error with mod (%)
    console.log(i%3 + "   " + i);
    while (true) {
      let rnd = Math.round(Math.random()*2)
      if (!mapRowArr[i%3].includes(rnd)&&rnd>=0&&rnd<=2) {
        mapRowArr[i%3].push(rnd)
        break
      }
    }
    while (true) {
      let rnd = Math.round(Math.random()*2)
      if (!mapColArr[i%3].includes(rnd)&&rnd>=0&&rnd<=2) {
        mapColArr[i%3].push(rnd)
        break
      }
    }
    mapRowArr[0]==0||mapColArr[0]==0?(mapRowArr.shift(),mapColArr.shift(),i-=1):null
  }
  console.log(rowArr);
  console.log(colArr);
  console.log(mapRowArr);
  console.log(mapColArr);
}

let changeColor = () => {
  document.querySelectorAll(".cell").forEach(e => e.innerText != "" ? e.style.color = `hsl(${parseInt(e.innerText+e.innerText)*54}, 80%, 50%)` : null)
}

let normalColor = () => {
  document.querySelectorAll(".cell").forEach(e => e.style.color = "black")
}

let countNumbers = () => {
  let countArr = []
  for (let i = 0; i <= 9; i++) {
    countArr.push(0)
  }
  document.querySelectorAll(".cell").forEach(e => e.innerText!=""?countArr[e.innerText]+=1:countArr[0]+=1)
  console.log(countArr);
}