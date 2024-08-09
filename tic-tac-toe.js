// Select all buttons
const buttons = document.querySelectorAll('.box');

// Select the reset button
const resetButton = document.getElementById('reset-btn');

// Initialize variables
let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let isGameOver = false;

// Function to check for a winner
function checkWinner() {
  const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
  ];

  for (let pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      displayMessage(`${currentPlayer} wins!`);
      isGameOver = true;
      return;
    }
  }

  if (!board.includes('')) {
    displayMessage(`It's a draw!`);
    isGameOver = true;
  }
}

// Function to display a message
function displayMessage(msg) {
  const message = document.getElementById('msg');
//   ???
  message.textContent = msg;
  document.querySelector('.msg_container').classList.remove('hide');
}

// Function to reset the game
function resetGame() {
  board = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  isGameOver = false;
  buttons.forEach(button => {
    button.textContent = '';
    button.disabled = false;
  });
  document.querySelector('.msg_container').classList.add('hide');
}

// Add event listeners to each button
buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    if (!isGameOver) {
      board[index] = currentPlayer;
      button.textContent = currentPlayer;
      button.disabled = true;
      checkWinner();
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  });
});

// Add event listener to the reset button
resetButton.addEventListener('click', resetGame);
