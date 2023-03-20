import React from 'react'
import { Player, updateGameState, useGameState } from '~/game-state'
import { GameBoard } from './GameBoard'

export const GameBoardController: React.FC = () => {
  const [gameState, setGameState] = useGameState()

  function onMove(player: Player, index: number) {
    setGameState(state => updateGameState(state, { player, index }))
  }

  return <GameBoard gameState={gameState} onMove={onMove} />
}
