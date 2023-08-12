import React from 'react'

import { GameBoardTileProps } from './GameBoardTile.types'
import { GameBoardActionType, TileGameAction, TileType, LevelID } from '../../types'
import { LevelTile, SurfaceTile, TargetTile } from './views'
import { EmptyTile } from './views/EmptyTile'
import { getLevelById } from '../../utils'
import { StageTile } from './views/StageTile'
import { DIRECTION } from '../../constants'

const renderTileGameAction = (tile: TileGameAction, moves: number, levelId: LevelID) => {
  const { action } = tile

  switch (action.type) {
    case GameBoardActionType.levelCompleted: {
      return (
        <TargetTile>
          {/* Show rest moves amount only if player has more than 0 and less that 99 of them */}
          <div>{moves > 0 && moves < 99 && moves}</div>
        </TargetTile>
      )
    }

    case GameBoardActionType.moveToAnotherLevel: {
      const level = getLevelById(action.levelId)
      const levelName = level?.name || '?'

      return (
        <LevelTile tileStatus={tile.status}>
          <div>{levelName}</div>
        </LevelTile>
      )
    }

    case GameBoardActionType.moveToAnotherStage: {
      const currentStage = getLevelById(levelId)
      const isNextStage = currentStage?.nextLevelId === action.stageId

      return (
        <StageTile
          tileStatus={tile.status}
          direction={isNextStage ? DIRECTION.right : DIRECTION.left}
        ></StageTile>
      )
    }

    default: {
      return <EmptyTile />
    }
  }
}

export const GameBoardTile: React.FC<GameBoardTileProps> = ({ tile, moves, levelId, hero }) => {
  switch (tile.type) {
    case TileType.surface: {
      return (
        <SurfaceTile
          tileOptions={tile.options}
          heroPosition={hero.position}
          tilePosition={tile.position}
        />
      )
    }
    case TileType.gameAction: {
      return renderTileGameAction(tile, moves, levelId)
    }
    default: {
      return <EmptyTile />
    }
  }
}
