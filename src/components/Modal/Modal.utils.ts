import { COLORS } from '../../App.styles'
import { ModalVariant } from './Modal.types'

const TITLE_COLORS_MAP = {
  [ModalVariant.error]: COLORS.red,
  [ModalVariant.info]: COLORS.yellow,
  [ModalVariant.success]: COLORS.green,
} as const

export const getTitleColor = (variant: ModalVariant) => TITLE_COLORS_MAP[variant]
