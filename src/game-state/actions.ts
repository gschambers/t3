import { Board, GameState, Move, Player } from './types'

export function createGameState(): GameState {
  return {
    board: [null, null, null, null, null, null, null, null, null],
    currentPlayer: 'X',
    winner: null,
    gameOver: false,
  }
}

export function updateGameState(state: GameState, move: Move): GameState {
  const { index, player } = move

  if (state.gameOver) {
    return state
  }

  if (player !== state.currentPlayer) {
    return state
  }

  if (state.board[index] !== null) {
    return state
  }

  const board = [...state.board] as Board
  board[index] = player

  const winner = checkWinner(board)
  const gameOver = winner !== null || board.every(cell => cell !== null)

  return {
    board,
    currentPlayer: player === 'X' ? 'O' : 'X',
    winner,
    gameOver,
  }
}

export function checkWinner(board: Board): Player | null {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ] as const

  for (const [a, b, c] of winningCombinations) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a]
    }
  }

  return null
}
