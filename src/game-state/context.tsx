import React, {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from 'react'

import { createGameState } from './actions'
import { GameState } from './types'

export const GameStateContext = createContext<
  [GameState, Dispatch<SetStateAction<GameState>>]
>([createGameState(), _state => undefined])

interface Props {
  initialState?: GameState
}

export const GameStateProvider: React.FC<PropsWithChildren<Props>> = ({
  children,
  initialState,
}) => (
  <GameStateContext.Provider
    value={useState<GameState>(initialState ?? createGameState())}
  >
    {children}
  </GameStateContext.Provider>
)

export function useGameState() {
  return useContext(GameStateContext)
}
