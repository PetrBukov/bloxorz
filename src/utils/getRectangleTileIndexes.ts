import { Coordinates, Dimensions } from '../types/common'

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

  for (let currentRowIndex = firstRowIndex; currentRowIndex <= lastRowIndex; currentRowIndex++) {
    const prevRowTilesAmount = currentRowIndex * tilesPerRowAmount

    const firstColumnIndex = rectanglePosition.x + prevRowTilesAmount
    const lastColumnIndex = rectanglePosition.x + rectangleSize.width - 1 + prevRowTilesAmount

    for (
      let currentColumnIndex = firstColumnIndex;
      currentColumnIndex <= lastColumnIndex;
      currentColumnIndex++
    ) {
      rectangleTileIndexes.push(currentColumnIndex)
    }
  }

  return rectangleTileIndexes
}
