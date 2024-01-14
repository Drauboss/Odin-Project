const squares = document.querySelector("#squares");
const inputButton = document.querySelector("#gridSizeInput");

let gridSize = 16;

createGrid(gridSize);

function createGrid(gridSize) {
  for (let i = 0; i < gridSize * gridSize; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.setAttribute("draggable", "false");
    squares.appendChild(square);
  }

  squares.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  squares.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

  square = document.querySelectorAll(".square");

  let isMouseDown = false;

  square.forEach((square) => {
    square.addEventListener("mousedown", () => {
      isMouseDown = true;
    });

    square.addEventListener("mouseover", () => {
      if (isMouseDown) {
        square.style.backgroundColor = "black";
      }
    });
  });

  document.addEventListener("mouseup", () => {
    isMouseDown = false;
  });

  square.forEach((square) => {
    square.addEventListener("mousedown", () => {
      square.style.backgroundColor = "black";
    });
  });
}

function clearGrid() {
  while (squares.firstChild) {
    squares.removeChild(squares.firstChild);
  }
}

inputButton.addEventListener("click", userInput);

function userInput() {
  console.log("userInput");
  gridSize = prompt("How many squares per side?");
  if (gridSize > 100) {
    alert("Please enter a number less than 100");
    userInput();
  } else {
    clearGrid();
    createGrid(gridSize);
  }
}
