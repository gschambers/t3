import React, { createContext, PropsWithChildren, useContext } from 'react'
import { createGameApi, GameApi } from './createGameApi'

const GameApiContext = createContext<GameApi>(createGameApi())

interface Props {
  gameApi: GameApi
}

export const GameApiProvider: React.FC<PropsWithChildren<Props>> = ({
  children,
  gameApi,
}) => {
  return (
    <GameApiContext.Provider value={gameApi}>
      {children}
    </GameApiContext.Provider>
  )
}

export function useGameApi() {
  return useContext(GameApiContext)
}
