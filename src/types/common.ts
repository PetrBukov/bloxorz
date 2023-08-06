import { DIRECTION } from '../constants'

export type Dimensions = {
  width: number
  height: number
}

export type Coordinates = {
  x: number
  y: number
}

export type ElementPosition = {
  top: string
  left: string
}

export type ElementSize = {
  width: string
  height: string
}

export type Direction = keyof typeof DIRECTION
