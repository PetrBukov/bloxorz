export enum ModalVariant {
  error = 'error',
  info = 'info',
  success = 'success',
}

export type ModalProps = {
  title: string
  variant: ModalVariant
}
