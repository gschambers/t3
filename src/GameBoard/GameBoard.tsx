import { Block, Grid, Row } from 'jsxstyle'
import React from 'react'
import colors from 'tailwindcss/colors'
import { GameState, Player } from '~/game-state'
import { O } from './O'
import { X } from './X'

interface Props {
  gameState: GameState
  onMove(player: Player, index: number): void
}

export const GameBoard: React.FC<Props> = ({ gameState, onMove }) => {
  return (
    <Grid
      height="100%"
      gridTemplateColumns="repeat(3, 1fr)"
      gridTemplateRows="repeat(3, 1fr)"
      gap={10}
      backgroundColor={colors.slate[100]}
    >
      {gameState.board.map((cell, i) => (
        <Row
          key={i}
          alignItems="center"
          justifyContent="center"
          backgroundColor={colors.white}
          borderRadius={10}
          boxShadow="0 0 0 1px rgba(0, 0, 0, 0.05), 0 4px 8px rgba(0, 0, 0, 0.1)"
          cursor="pointer"
          props={{
            onClick: () => onMove(gameState.currentPlayer, i),
          }}
        >
          <Block width="60%" height="60%">
            {cell === 'X' ? <X /> : cell === 'O' ? <O /> : null}
          </Block>
        </Row>
      ))}
    </Grid>
  )
}
