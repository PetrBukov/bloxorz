import {
  GameBoardAction,
  GameBoardActionType,
  Tile,
  TileStatus,
  TileType,
} from '../../../types/tile'

export const getGameBoardAction = ({
  heroBlockIndexes,
  gameBoardTiles,
}: {
  heroBlockIndexes: Array<number>
  gameBoardTiles: Array<Tile>
}): GameBoardAction | null => {
  let gameBoardAction = null

  // An action is considered selected only if the Hero is square,
  // in other words it has only one index so if Hero Block has more than one index
  // we always return null
  if (heroBlockIndexes.length > 1) {
    return gameBoardAction
  }

  heroBlockIndexes.forEach(tileIndex => {
    const tile = gameBoardTiles.at(tileIndex)

    if (tile && tile.type === TileType.gameAction) {
      const { action } = tile
      switch (action.type) {
        case GameBoardActionType.moveToAnotherLevel: {
          const shouldActionApplied =
            tile.status === TileStatus.activated || tile.status === TileStatus.available

          gameBoardAction = shouldActionApplied ? tile.action : null
          break
        }
        default: {
          gameBoardAction = tile.action
          break
        }
      }
    }
  })

  return gameBoardAction
}
