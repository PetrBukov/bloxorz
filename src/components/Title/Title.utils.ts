import { COLORS } from '../../App.styles'
import { TitleVariant } from './Title.types'

const TITLE_COLORS_MAP = {
  [TitleVariant.error]: COLORS.red,
  [TitleVariant.info]: COLORS.yellow,
  [TitleVariant.success]: COLORS.green,
} as const

export const getTitleColor = (variant: TitleVariant) => TITLE_COLORS_MAP[variant]
