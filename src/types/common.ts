import { DIRECTION } from '../constants'

/**
 * Size of a game board
 */
export type Dimensions = {
  width: number
  height: number
}

/**
 * Coordinates on the game board
 * where x describe a column and y describe a row
 */
export type Coordinates = {
  x: number
  y: number
}

/**
 * Placement of a game element on the game board
 *
 * You can imagine a game board with coordinates
 *
 ** [[0,0], [1,0], [2,0], [3,0]]
 ** [[0,1], [1,1], [2,1], [3,1]]
 ** [[0,2], [1,2], [2,2], [3,2]]
 ** [[0,3], [1,3], [2,3], [3,3]]
 *
 * Everything we can place on the game board is a rectangles (Surfaces, Hero Block, Texts)
 * so to place something on the game board we should just specify two opposite angles of the rectangle
 *
 * Example: If Placement equals to [[1,0], [2,2]] it means that we have got a rectangle on the game board
 * which one angle on position [1,0] and opposite angle on position [2,2].
 *
 ** [[0,0], [X,X], [X,X], [3,0]]
 ** [[0,1], [X,X], [X,X], [3,1]]
 ** [[0,2], [X,X], [X,X], [3,2]]
 ** [[0,3], [1,3], [2,3], [3,3]]
 *
 */
export type Placement = [angle1: Coordinates, angle2: Coordinates]

/**
 * Describe position of an HTML element
 */
export type ElementPosition = {
  top: string
  left: string
}

/**
 * Describe size of an HTML element
 */
export type ElementSize = {
  width: string
  height: string
}

/**
 * Describe direction of moving or placement
 */
export type Direction = keyof typeof DIRECTION
