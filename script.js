const boardContainer = document.querySelector("#board-container");

let numberOfRows = 16;
let numberOfTilesPerRow = 16;

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

boardContainer.addEventListener("mouseover", (e)=>e.target.classList.add("hovered-tile"))