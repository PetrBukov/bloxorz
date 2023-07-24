export enum TitleVariant {
  error = 'error',
  info = 'info',
  success = 'success',
}

export type TitleProps = {
  text: string
  variant: TitleVariant
}
