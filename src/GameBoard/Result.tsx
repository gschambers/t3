import { Block, Row } from 'jsxstyle'
import React, { Fragment } from 'react'
import colors from 'tailwindcss/colors'
import { Player } from '~/game-state'
import { O } from './O'
import { X } from './X'

interface Props {
  winner: Player | null
}

export const Result: React.FC<Props> = ({ winner }) => {
  return (
    <Row alignItems="center" gap={5} color={colors.slate['700']}>
      {winner === null ? (
        <Block fontSize={18}>Draw!</Block>
      ) : (
        <Fragment>
          <Block width={16} height={16}>
            {winner === 'X' ? <X /> : <O />}
          </Block>
          <Block fontSize={18}>wins!</Block>
        </Fragment>
      )}
    </Row>
  )
}
