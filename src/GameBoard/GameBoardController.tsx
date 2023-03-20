import React, { useCallback, useEffect } from 'react'
import { useGameApi } from '~/api'
import { Player, useGameState } from '~/game-state'
import { GameBoard } from './GameBoard'

export const GameBoardController: React.FC = () => {
  const gameApi = useGameApi()
  const [gameState, setGameState] = useGameState()

  const onMove = useCallback(
    (player: Player, index: number) => {
      gameApi.makeMove({ player, index })
    },
    [gameApi]
  )

  const onStartNewGame = useCallback(() => {
    gameApi.startNewGame()
  }, [gameApi])

  useEffect(() => {
    return gameApi.subscribeToGameState(setGameState)
  }, [gameApi, setGameState])

  return (
    <GameBoard
      gameState={gameState}
      onMove={onMove}
      onStartNewGame={onStartNewGame}
    />
  )
}
