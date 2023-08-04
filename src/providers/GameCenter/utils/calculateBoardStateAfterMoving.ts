import { GameBoard } from '../../../types/game'
import { Hero } from '../../../types/hero'
import { checkForSquareBlock } from '../../../utils/checkForSquareBlock'
import { getRectangleTileIndexes } from '../../../utils/getRectangleTileIndexes'

export const calculateBoardStateAfterMoving = ({
  hero: { size: heroSize, position: heroPosition },
  board,
}: {
  hero: Hero
  board: GameBoard
}) => {
  // 1 - User can activate some action on the board only when hero block is square
  const isSquareBlock = checkForSquareBlock(heroSize)
  if (!isSquareBlock) {
    return board
  }

  // the getRectangleTileIndexes function always returns an array with length equals to 1
  // because we have got checkForSquareBlock above in the code
  // so we can safely take first element from this array and work with it like with heroIndex
  const [heroIndex] = getRectangleTileIndexes({
    rectanglePosition: heroPosition,
    rectangleSize: heroSize,
    gameLevelSize: board.size,
  })

  const currentTile = board.tiles[heroIndex]
}
