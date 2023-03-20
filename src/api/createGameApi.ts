import { BehaviorSubject } from 'rxjs'
import { createGameState, GameState, Move, updateGameState } from '~/game-state'
import { AllIntents } from './types'

export function createGameApi() {
  // In a distributed production system, the logic to reconcile moves into
  // existing game state and broadcast to all subscribers would be handled
  // by a server. For the purposes of this demo, we'll use a simple
  // BehaviorSubject to replicate the behavior of a server.
  const gameState$ = new BehaviorSubject<GameState>(createGameState())

  function raiseIntent(intent: AllIntents): void {
    switch (intent.type) {
      case 'START_NEW_GAME':
        gameState$.next(createGameState())
        break

      case 'MAKE_MOVE':
        const { move } = intent.payload
        const state = gameState$.value
        const updatedState = updateGameState(state, move)
        gameState$.next(updatedState)
        break
    }
  }

  function startNewGame(): void {
    raiseIntent({ type: 'START_NEW_GAME' })
  }

  function makeMove(move: Move): void {
    raiseIntent({ type: 'MAKE_MOVE', payload: { move } })
  }

  function subscribeToGameState(
    callback: (state: GameState) => void
  ): () => void {
    return gameState$.subscribe(callback).unsubscribe
  }

  return {
    startNewGame,
    makeMove,
    subscribeToGameState,
  }
}

export type GameApi = ReturnType<typeof createGameApi>
