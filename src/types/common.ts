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
