// tic-tac-toe player
export type Player = 'X' | 'O'

// tic-tac-toe cell
export type Cell = Player | null

// tic-tac-toe board as one-dimensional array with 9 cells
export type Board = [Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell]

// tic-tac-toe move
export interface Move {
  index: number
  player: Player
}

// tic-tac-toe game state
export interface GameState {
  board: Board
  currentPlayer: Player
  winner: Player | null
  gameOver: boolean
}
