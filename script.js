const gameTiles = [...document.querySelectorAll(".tile")];
const gameBoard = document.querySelector(".board");

const gameState = [
  [gameTiles[0], gameTiles[1], gameTiles[2]],
  [gameTiles[3], gameTiles[4], gameTiles[5]],
  [gameTiles[6], gameTiles[7], gameTiles[8]],
];

// Render board
const render = () => {
  gameState.forEach((tiles) => {
    tiles.forEach((el) => gameBoard.append(el));
  });
};

gameBoard.addEventListener("click", (e) => {
  const target = e.target;

  // Defined clicked tile
  let targetX, targetY;
  gameState.forEach((row, rowIndex) => {
    row.forEach((column, columnIndex) => {
      if (column === target) {
        targetX = rowIndex;
        targetY = columnIndex;
      }
    });
  });
  //Defined empty Tile
  let emptyX, emptyY;
  gameState.forEach((row, rowIndex) => {
    row.forEach((column, columnIndex) => {
      if (column.textContent === "") {
        emptyX = rowIndex;
        emptyY = columnIndex;
      }
    });
  });

  // Swap places empty and clicked
  //   let temp = gameState[targetX][targetY];
  //   gameState[targetX][targetY] = gameState[emptyX][emptyY];
  //   gameState[emptyX][emptyY] = temp;

  if (targetY === emptyY) {
    if (targetX - 1 === emptyX || targetX + 1 === emptyX) {
      let temp = gameState[targetX][targetY];
      gameState[targetX][targetY] = gameState[emptyX][emptyY];
      gameState[emptyX][emptyY] = temp;
      console.log("ruch dopuszczalny");
      render();
    } else {
      console.log("ruch zabroniony");
    }
  }
  if (targetX === emptyX) {
    if (targetY - 1 === emptyY || targetY + 1 === emptyY) {
      let temp = gameState[targetX][targetY];
      gameState[targetX][targetY] = gameState[emptyX][emptyY];
      gameState[emptyX][emptyY] = temp;
      render();
      console.log("ruch dopuszczalny");
    } else {
      console.log("ruch zabroniony");
    }
  }
});
