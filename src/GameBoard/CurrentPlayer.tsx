import { Row, Block } from 'jsxstyle'
import React from 'react'
import colors from 'tailwindcss/colors'
import { Player } from '~/game-state'
import { O } from './O'
import { X } from './X'

interface Props {
  player: Player
}

export const CurrentPlayer: React.FC<Props> = ({ player }) => (
  <Row alignItems="center" gap={5} color={colors.slate['700']}>
    <Block fontSize={18}>Current Player:</Block>
    <Block width={16} height={16}>
      {player === 'X' ? <X /> : <O />}
    </Block>
  </Row>
)
