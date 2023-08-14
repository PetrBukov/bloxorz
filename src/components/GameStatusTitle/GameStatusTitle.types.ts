import { GameBoardAction } from '../../types'

export type GameStatusTitleProps = {
  levelSequenceNumber: number
  activeAction: GameBoardAction
}

export enum StatusTextVariant {
  success = 'success',
  failure = 'failure',
  info = 'info',
}
