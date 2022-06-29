type Direction = 'row' | 'column'

/**
 * A GridState Object is a declarative description of a non-overlapping tiling.
 */
type GridState =
  | {
      first: GridState
      second: GridState
      splitPercentage: number
      direction: Direction
    }
  | string

/**
 * A Bounding Box describes a css-inset in percentages.
 * Opposing values (eg. left & right) must add up to no more than 100
 */
type BoundingBox = {
  left: number
  right: number
  top: number
  bottom: number
}
