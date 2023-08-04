import { LevelID } from '../../types/game'
import { GameBoardAction } from '../../types/tile'

export type GameStatusTitleProps = {
  levelId: LevelID
  activeAction: GameBoardAction
}

export enum StatusTextVariant {
  success = 'success',
  failure = 'failure',
  info = 'info',
}
