import React from 'react'

import { FragileSurfaceTileProps } from './FragileSurfaceTile.types'
import { FragileSurfaceTileContainer } from './FragileSurfaceTile.styles'
import { calcLightSpotPosition } from '../../GameBoardTile.utils'
import { LightSpot } from '../LightSpot'
import { GameBoardActionType } from '../../../../types'
import { checkIfCoordinatesEqual } from '../../../../utils'

export const FragileSurfaceTile: React.FC<FragileSurfaceTileProps> = ({
  heroPosition,
  tilePosition,
  activeActionType,
}) => {
  const lightSpotPosition = calcLightSpotPosition(heroPosition, tilePosition)
  const showSplitAnimation =
    activeActionType === GameBoardActionType.heroBlockOnFragileSurface &&
    checkIfCoordinatesEqual(heroPosition, tilePosition)

  return (
    <FragileSurfaceTileContainer showSplitAnimation={showSplitAnimation}>
      <LightSpot {...lightSpotPosition} />
    </FragileSurfaceTileContainer>
  )
}
