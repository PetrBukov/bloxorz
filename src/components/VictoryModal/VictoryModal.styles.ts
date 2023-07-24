import styled from '@emotion/styled'

export const VictoryModalContent = styled.div`
  padding: 0 12px 12px 12px;
  display: grid;
  grid-gap: 40px;
  grid-template-rows: 70px 1fr 30px;
`

export const VictoryModalScores = styled.div`
  display: grid;
  justify-items: center;
  gap: 8px;
`

export const VictoryModalScoresItem = styled.div<{ valueColor: string }>`
  color: var(--gray400);
  font-size: 16px;

  &:first-of-type {
    color: var(--gray200);
    font-size: 22px;
    font-weight: 600;

    span {
      color: ${({ valueColor }) => valueColor};
    }
  }
`

export const VictoryModalActions = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 24px;
`
