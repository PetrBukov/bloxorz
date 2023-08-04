import { Direction } from '../../../types/common'
import { Hero } from '../../../types/hero'
import { calculateHeroPositionAfterMoving } from './calculateHeroPositionAfterMoving'
import { calculateHeroSizeAfterMoving } from './calculateHeroSizeAfterMoving'

export const calculateHeroStateAfterMoving = ({
  hero,
  movingDirection,
}: {
  hero: Hero
  movingDirection: Direction
}): Hero => ({
  size: calculateHeroSizeAfterMoving({
    heroSize: hero.size,
    movingDirection,
  }),
  position: calculateHeroPositionAfterMoving({
    hero,
    movingDirection,
  }),
})
