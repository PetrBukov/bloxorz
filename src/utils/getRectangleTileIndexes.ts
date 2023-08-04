import { Coordinates, Dimensions } from '../types/common'

/**
 * If some part of rectangle is out of map it's index equals to -1
 */
export const getRectangleTileIndexes = ({
  rectangleSize,
  rectanglePosition,
  gameLevelSize,
}: {
  rectangleSize: Dimensions
  rectanglePosition: Coordinates
  gameLevelSize: Dimensions
}): Array<number> => {
  const rectangleTileIndexes: Array<number> = []

  const tilesPerRowAmount = gameLevelSize.width

  const firstRowIndex = rectanglePosition.y
  const lastRowIndex = rectanglePosition.y + rectangleSize.height - 1

  const maxGameLevelRowIndex = gameLevelSize.height - 1

  for (let currentRowIndex = firstRowIndex; currentRowIndex <= lastRowIndex; currentRowIndex++) {
    const prevRowTilesAmount = currentRowIndex * tilesPerRowAmount

    const firstColumnIndex = rectanglePosition.x + prevRowTilesAmount
    const lastColumnIndex = rectanglePosition.x + rectangleSize.width + prevRowTilesAmount - 1

    let isIndexOutOfMap = rectanglePosition.x < 0

    for (
      let currentColumnIndex = firstColumnIndex;
      currentColumnIndex <= lastColumnIndex;
      currentColumnIndex++
    ) {
      const gameLevelRowIndex =
        currentRowIndex < maxGameLevelRowIndex ? currentRowIndex : maxGameLevelRowIndex

      const maxColumnIndexForCurrentRow = (gameLevelRowIndex + 1) * tilesPerRowAmount - 1
      isIndexOutOfMap = isIndexOutOfMap || currentColumnIndex > maxColumnIndexForCurrentRow

      rectangleTileIndexes.push(isIndexOutOfMap ? -1 : currentColumnIndex)
    }
  }

  return rectangleTileIndexes
}
