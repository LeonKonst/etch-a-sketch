const boardContainer = document.querySelector("#board-container");
const numberOfTilesBtn = document.querySelector("#select-number-of-tiles-btn");

createGrid()

numberOfTilesBtn.addEventListener("click", setNumberOfTiles)

function setNumberOfTiles(){
    let numberOfTilesPerRow = parseInt(prompt("Choose the number of tiles per side (maximum 100):",16));
    console.log(numberOfTilesPerRow)
    numberOfTilesPerRow > 99 || isNaN(numberOfTilesPerRow) ? createGrid(): createGrid(numberOfTilesPerRow);
    
}

function createGrid(numberOfTilesPerRow=16){
    boardContainer.innerHTML = ''
    let numberOfRows = numberOfTilesPerRow;
    for(let i = 0; i < numberOfRows; i++){
        let rowContainer = document.createElement("div");
        rowContainer.classList.add("grid-row");
        boardContainer.appendChild(rowContainer);
        for(let i = 0; i < numberOfTilesPerRow; i++){
            let tile = document.createElement("div");
            tile.classList.add("sketch-tile");
            rowContainer.appendChild(tile);
        }
    }   
}



boardContainer.addEventListener("mouseover", (e)=>{
    let randomRed = Math.floor(Math.random()*256);
    let randomGreen = Math.floor(Math.random()*256);
    let randomBlue = Math.floor(Math.random()*256);
    if(e.target.classList.contains("sketch-tile")){
        if(!e.target.style.opacity){
            e.target.style.opacity = 0.1;
        } else {
            let oldOpacity =  e.target.style.opacity
            e.target.style.opacity = parseFloat(oldOpacity) + 0.1;
        }
        e.target.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
    }
    }
)