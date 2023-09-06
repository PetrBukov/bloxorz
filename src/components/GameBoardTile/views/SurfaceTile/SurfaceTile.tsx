import React from 'react'

import { SurfaceTileProps } from './SurfaceTile.types'
import { SurfaceTileContainer } from './SurfaceTile.styles'
import { calcLightSpotPosition } from '../../GameBoardTile.utils'
import { LightSpot } from '../LightSpot'

export const SurfaceTile: React.FC<SurfaceTileProps> = ({
  tileOptions,
  heroPlacement,
  tilePosition,
}) => {
  const lightSpotPosition = calcLightSpotPosition(heroPlacement, tilePosition)

  return (
    <SurfaceTileContainer {...tileOptions}>
      <LightSpot {...lightSpotPosition} />
    </SurfaceTileContainer>
  )
}
