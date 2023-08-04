export type Dimensions = {
  width: number
  height: number
}

export type Coordinates = {
  x: number
  y: number
}

export type BlockPosition = {
  top: string
  left: string
}

export type BlockSizes = {
  width: string
  height: string
}

export const DIRECTION = {
  up: 'up',
  right: 'right',
  down: 'down',
  left: 'left',
} as const

export type Direction = keyof typeof DIRECTION

export const BLOCK_ASPECT_RATIO = {
  squareBlock: 'squareBlock',
  verticalBlock: 'verticalBlock',
  horizontalBlock: 'horizontalBlock',
} as const

export type BlockAspectRatio = keyof typeof BLOCK_ASPECT_RATIO
