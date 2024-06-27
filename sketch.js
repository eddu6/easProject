let gridContainer = document.getElementById("gridContainer");
let gridSize = 500;
let squareSide = 16;

gridContainer.style.width = `${gridSize}px`;
gridContainer.style.height = `${gridSize}px`;


function createGridCells(){

      for(i = 0; i < (squareSide * squareSide); i++){
        const gridCell = document.createElement('div');

        gridCell.style.width = `${(gridSize / squareSide)}px`;
        gridCell.style.height = `${gridSize / squareSide}px`;
        gridCell.classList.add('gridBox');

        gridContainer.appendChild(gridCell);          
}
}

function removeGrid(){
      while(gridContainer.firstChild){
            gridContainer.removeChild(gridContainer.firstChild)
      }
}

createGridCells();


let changeDimensionsButton = document.body.appendChild(document.createElement('button'));

changeDimensionsButton.textContent = 'Change Grid Size';
changeDimensionsButton.style.marginLeft = '40%'; 
changeDimensionsButton.style.marginRight = 'auto'; 
changeDimensionsButton.style.marginTop = '40px';
changeDimensionsButton.style.width = '160px';

changeDimensionsButton.addEventListener('click', function() {
  removeGrid();
  
  do{
      squareSide = Number(prompt("What Dimensions Do You Want For The Grid?"));
  }while(squareSide < 0 || squareSide > 100 || squareSide == Number(null))
      
  createGridCells();
      gridBoxes = document.getElementsByClassName('gridBox');
gridBoxArray = Array.from(gridBoxes)

gridBoxArray.forEach(function(gridBox) {
      gridBox.addEventListener('mouseenter', function(event) {
            let v = Math.floor(Math.random() * 255);
            let w = Math.floor(Math.random() * 255);
            let x = Math.floor(Math.random() * 255);
            let randomColor = "rgb(" + v + ", " + w +", " + x +")";
            event.target.style.backgroundColor = randomColor;
      })
})

clearButton.addEventListener('click', function() {
      gridBoxArray.forEach(function(gridBox) {
            gridBox.style.backgroundColor = 'white';
      }
)})
})

gridBoxes = document.getElementsByClassName('gridBox');
gridBoxArray = Array.from(gridBoxes)

gridBoxArray.forEach(function(gridBox) {
      gridBox.addEventListener('mouseenter', function(event) {
            let v = Math.floor(Math.random() * 255);
            let w = Math.floor(Math.random() * 255);
            let x = Math.floor(Math.random() * 255);
            let randomColor = "rgb(" + v + ", " + w +", " + x +")";
            event.target.style.backgroundColor = randomColor;
      })
})

let clearButton = document.createElement("button");

clearButton.textContent = "Clear";
clearButton.style.marginLeft = '0'; 
clearButton.style.marginRight = 'auto'; 
clearButton.style.marginTop = '40px';

document.querySelector("body").appendChild(clearButton);

clearButton.addEventListener('click', function() {
      gridBoxArray.forEach(function(gridBox) {
            gridBox.style.backgroundColor = 'white';
      }
)})


      













