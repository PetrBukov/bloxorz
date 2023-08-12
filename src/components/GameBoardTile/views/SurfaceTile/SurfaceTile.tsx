import React from 'react'

import { SurfaceTileProps } from './SurfaceTile.types'
import { LightSpot, SurfaceTileContainer } from './SurfaceTile.styles'
import { calcLightSpotPosition } from './SurfaceTile.utils'

export const SurfaceTile: React.FC<SurfaceTileProps> = ({
  tileOptions,
  heroPosition,
  tilePosition,
}) => {
  const lightSpotPosition = calcLightSpotPosition(heroPosition, tilePosition)

  return (
    <SurfaceTileContainer {...tileOptions}>
      <LightSpot {...lightSpotPosition} />
    </SurfaceTileContainer>
  )
}