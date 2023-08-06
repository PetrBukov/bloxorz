import { Hero, GameBoardActionType } from '../../types'

export type HeroProps = Hero & {
  activeActionType?: GameBoardActionType
}
