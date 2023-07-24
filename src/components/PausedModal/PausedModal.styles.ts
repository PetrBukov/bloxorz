import styled from '@emotion/styled'

export const PausedModalContent = styled.div`
  padding: 0 12px 12px 12px;
  display: grid;
  grid-gap: 20px;
  grid-template-rows: 1fr 30px;
`

export const PausedModalActions = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 24px;
`
export const PausedModalText = styled.div`
  padding: 0 30px;

  font-size: 20px;
  line-height: 28px;
  text-align: justify;
  color: var(--white);
`
