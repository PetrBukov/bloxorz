import { Coordinates, Dimensions } from '../types/common'
import { GameBoardActionType, Tile, TileType } from '../types/tile'
import { checkForSquareBlock } from './checkForSquareBlock'
import { getRectangleTileIndexes } from './getRectangleTileIndexes'

export const checkForVictory = ({
  heroSize,
  heroPosition,
  gameBoardTiles,
  gameLevelSize,
}: {
  heroSize: Dimensions
  heroPosition: Coordinates
  gameBoardTiles: Array<Tile>
  gameLevelSize: Dimensions
}) => {
  // Only when Hero Block is square a victory is possible
  const isSquareBlock = checkForSquareBlock(heroSize)
  if (!isSquareBlock) {
    return false
  }

  // 2 - Check cases when Hero Block activates levelComplete action
  const heroBlockIndexes = getRectangleTileIndexes({
    rectangleSize: heroSize,
    rectanglePosition: heroPosition,
    gameLevelSize,
  })

  let isHeroBlockInTheTargetTile = false
  heroBlockIndexes.forEach(tileIndex => {
    const currentTile = gameBoardTiles[tileIndex]

    if (
      currentTile.type === TileType.gameAction &&
      currentTile.action.type === GameBoardActionType.levelCompleted
    ) {
      isHeroBlockInTheTargetTile = true
    }
  })

  return isHeroBlockInTheTargetTile
}
