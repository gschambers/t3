import { Block, Row } from 'jsxstyle'
import React, { PropsWithChildren } from 'react'
import colors from 'tailwindcss/colors'
import { GameStateProvider } from '~/game-state'
import { GameBoardController } from './GameBoard'

export const App: React.FC = () => {
  return (
    <GameStateProvider>
      <Container>
        <GameBoardController />
      </Container>
    </GameStateProvider>
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
