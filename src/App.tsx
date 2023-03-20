import React from 'react'
import { GameStateProvider } from '~/game-state'

export const App: React.FC = () => {
  return (
    <GameStateProvider>
      <div>hello</div>
    </GameStateProvider>
  )
}
