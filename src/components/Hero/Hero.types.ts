import { GameStatus } from '../../types/game'
import { Hero } from '../../types/hero'

export type HeroBlockSizes = {
  width: string
  height: string
}

export type HeroBlockPosition = {
  top: string
  left: string
}

export type HeroProps = Hero & {
  gameStatus: GameStatus
  gameMoves: number
}
