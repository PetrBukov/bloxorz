import React from 'react'

import { FragileSurfaceTileProps } from './FragileSurfaceTile.types'
import { FragileSurfaceTileContainer } from './FragileSurfaceTile.styles'
import { calcLightSpotPosition } from '../../GameBoardTile.utils'
import { LightSpot } from '../LightSpot'
import { GameBoardActionType } from '../../../../types'
import { checkIfCoordinatesEqual } from '../../../../utils'

export const FragileSurfaceTile: React.FC<FragileSurfaceTileProps> = ({
  heroPlacement,
  tilePosition,
  activeActionType,
}) => {
  const lightSpotPosition = calcLightSpotPosition(heroPlacement, tilePosition)
  const showSplitAnimation =
    activeActionType === GameBoardActionType.heroBlockOnFragileSurface &&
    checkIfCoordinatesEqual(heroPlacement[0], tilePosition)

  return (
    <FragileSurfaceTileContainer showSplitAnimation={showSplitAnimation}>
      <LightSpot {...lightSpotPosition} />
    </FragileSurfaceTileContainer>
  )
}
