import { GameBoardAction, LevelID } from '../../types'

export type GameStatusTitleProps = {
  levelId: LevelID
  activeAction: GameBoardAction
}

export enum StatusTextVariant {
  success = 'success',
  failure = 'failure',
  info = 'info',
}
