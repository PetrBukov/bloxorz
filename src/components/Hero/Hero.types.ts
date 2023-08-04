import { Hero } from '../../types/hero'
import { GameBoardActionType } from '../../types/tile'

export type HeroProps = Hero & {
  activeActionType?: GameBoardActionType
}
