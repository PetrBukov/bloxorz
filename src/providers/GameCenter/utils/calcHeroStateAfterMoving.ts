import { Direction } from '../../../types/common'
import { Hero } from '../../../types/hero'
import { calcHeroPositionAfterMoving } from './calcHeroPositionAfterMoving'
import { calcHeroSizeAfterMoving } from './calcHeroSizeAfterMoving'

export const calcHeroStateAfterMoving = ({
  hero,
  movingDirection,
}: {
  hero: Hero
  movingDirection: Direction
}): Hero => ({
  size: calcHeroSizeAfterMoving({
    heroSize: hero.size,
    movingDirection,
  }),
  position: calcHeroPositionAfterMoving({
    hero,
    movingDirection,
  }),
})
