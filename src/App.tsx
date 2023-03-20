import { Block, Row } from 'jsxstyle'
import React, { PropsWithChildren } from 'react'
import colors from 'tailwindcss/colors'
import { createGameApi, GameApiProvider } from '~/api'
import { GameStateProvider } from '~/game-state'
import { GameBoardController } from './GameBoard'

const gameApi = createGameApi()

export const App: React.FC = () => {
  return (
    <GameApiProvider gameApi={gameApi}>
      <GameStateProvider>
        <Container>
          <GameBoardController />
        </Container>
      </GameStateProvider>
    </GameApiProvider>
  )
}

const Container: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Row
      height="100vh"
      alignItems="center"
      justifyContent="center"
      backgroundColor={colors.slate['50']}
    >
      <Block width="50vmin" height="50vmin">
        {children}
      </Block>
    </Row>
  )
}
