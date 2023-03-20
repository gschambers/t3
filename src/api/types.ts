import { Move } from '~/game-state'

export interface Intent {
  type: string
  payload?: any
}

export interface StartNewGameIntent extends Intent {
  type: 'START_NEW_GAME'
}

export interface MakeMoveIntent extends Intent {
  type: 'MAKE_MOVE'
  payload: {
    move: Move
  }
}

export type AllIntents = StartNewGameIntent | MakeMoveIntent
