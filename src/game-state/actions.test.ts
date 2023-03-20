import { checkWinner, createGameState, updateGameState } from './actions'
import { GameState, Move } from './types'

describe('actions', () => {
  describe('createGameState', () => {
    it('should create a new game state', () => {
      const state = createGameState()
      expect(state).toEqual({
        board: [null, null, null, null, null, null, null, null, null],
        currentPlayer: 'X',
        winner: null,
        gameOver: false,
      })
    })
  })

  describe('updateGameState', () => {
    it('should update the game state with a move', () => {
      const state = createGameState()
      const move: Move = { index: 0, player: 'X' }
      const updatedState = updateGameState(state, move)
      expect(updatedState).toEqual({
        board: ['X', null, null, null, null, null, null, null, null],
        currentPlayer: 'O',
        winner: null,
        gameOver: false,
      })
    })

    it('should not update the game state with an invalid move', () => {
      const state = createGameState()
      const move: Move = { index: 0, player: 'X' }
      const updatedState = updateGameState(state, move)
      const invalidMove: Move = { index: 0, player: 'O' }
      const invalidUpdatedState = updateGameState(updatedState, invalidMove)
      expect(invalidUpdatedState).toEqual(updatedState)
    })

    it('should not update the game state with a move on an out-of-bounds cell', () => {
      const state = createGameState()
      const move: Move = { index: 0, player: 'X' }
      const updatedState = updateGameState(state, move)
      const invalidMove: Move = { index: 10, player: 'O' }
      const invalidUpdatedState = updateGameState(updatedState, invalidMove)
      expect(invalidUpdatedState).toEqual(updatedState)
    })

    // check game state is not updated if game is over
    it('should not update the game state if game is over', () => {
      const state: GameState = {
        board: [null, 'O', 'X', 'X', 'O', 'O', 'O', 'X', 'X'],
        currentPlayer: 'X',
        winner: 'X',
        gameOver: true,
      }

      const move: Move = { index: 0, player: 'X' }
      const updatedState = updateGameState(state, move)
      expect(updatedState).toEqual(state)
    })

    it('should set the winner to X and game is over when X wins', () => {
      const state: GameState = {
        board: ['X', 'O', null, 'X', 'O', null, null, null, null],
        currentPlayer: 'X',
        winner: null,
        gameOver: false,
      }

      const move: Move = { index: 6, player: 'X' }

      const updatedState = updateGameState(state, move)
      expect(updatedState).toEqual({
        board: ['X', 'O', null, 'X', 'O', null, 'X', null, null],
        currentPlayer: 'O',
        winner: 'X',
        gameOver: true,
      })
    })

    it('should set the winner to O and game is over when O wins', () => {
      const state: GameState = {
        board: ['O', 'X', 'X', 'O', 'X', null, null, null, null],
        currentPlayer: 'O',
        winner: null,
        gameOver: false,
      }

      const move: Move = { index: 6, player: 'O' }

      const updatedState = updateGameState(state, move)
      expect(updatedState).toEqual({
        board: ['O', 'X', 'X', 'O', 'X', null, 'O', null, null],
        currentPlayer: 'X',
        winner: 'O',
        gameOver: true,
      })
    })

    // it should mark the game as over if the board is full and there is no winner
    it('should mark the game as over if the board is full and there is no winner', () => {
      const state: GameState = {
        board: ['X', 'O', 'X', 'O', 'X', null, 'O', 'X', 'O'],
        currentPlayer: 'X',
        winner: null,
        gameOver: false,
      }

      const move: Move = { index: 5, player: 'X' }

      const updatedState = updateGameState(state, move)
      expect(updatedState).toEqual({
        board: ['X', 'O', 'X', 'O', 'X', 'X', 'O', 'X', 'O'],
        currentPlayer: 'O',
        winner: null,
        gameOver: true,
      })
    })

    // ensure updateGameState does not mutate the original state
    it('should not mutate the original state', () => {
      const state = createGameState()
      const move: Move = { index: 0, player: 'X' }
      const updatedState = updateGameState(state, move)
      expect(updatedState).not.toBe(state)
    })
  })

  describe('checkWinner', () => {
    test.each`
      description                 | board                                                     | expected
      ${'X wins on top row'}      | ${['X', 'X', 'X', null, null, null, null, null, null]}    | ${'X'}
      ${'O wins on middle row'}   | ${['O', null, null, 'O', 'O', 'O', null, null, null]}     | ${'O'}
      ${'X wins on left column'}  | ${['X', null, null, 'X', null, null, 'X', null, null]}    | ${'X'}
      ${'O wins on right column'} | ${[null, null, 'O', null, null, 'O', null, null, 'O']}    | ${'O'}
      ${'X wins on diagonal'}     | ${['X', null, null, null, 'X', null, null, null, 'X']}    | ${'X'}
      ${'O wins on diagonal'}     | ${[null, null, 'O', null, 'O', null, 'O', null, null]}    | ${'O'}
      ${'no winner, full board'}  | ${['X', 'O', 'X', 'O', 'X', 'O', 'O', 'X', 'O']}          | ${null}
      ${'no winner, empty board'} | ${[null, null, null, null, null, null, null, null, null]} | ${null}
    `('$description', ({ board, expected }) => {
      expect(checkWinner(board)).toEqual(expected)
    })
  })
})
