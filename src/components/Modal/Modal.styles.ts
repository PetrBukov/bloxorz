import styled from '@emotion/styled'

export const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: grid;
  width: 100%;
  height: 100%;
  max-width: 310px;
  max-height: 300px;

  background: rgba(0, 0, 0, 60%);
  border-radius: 2px;
`

export const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 50%);
`
