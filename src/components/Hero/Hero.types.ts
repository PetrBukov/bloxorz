import { GameStatus } from '../../types/game'
import { Hero } from '../../types/hero'

export type HeroProps = Hero & {
  gameStatus: GameStatus
  gameMoves: number
}
