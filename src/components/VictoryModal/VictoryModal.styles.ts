import styled from '@emotion/styled'
import { GameScore } from '../../types/game'

export const VictoryModalTitle = styled.div`
  margin: -20px 0 20px;
  padding: 2px;
  text-align: center;
  transform: rotate(-1deg);
  background: none;
  font-family: simpleStamp, sans-serif;
  font-size: 32px;

  span {
    background-color: var(--yellow);
    padding: 5px;
  }
}
`

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

const SCORE_VALUE_COLORS = ['white', 'red', 'white', 'green']
export const VictoryModalScoresItem = styled.div<{ gameScore: GameScore }>`
  color: var(--gray300);
  font-size: 16px;

  &:first-of-type {
    color: var(--yellow);
    font-size: 22px;
    font-weight: 600;

    span {
      color: ${({ gameScore }) => `var(--${SCORE_VALUE_COLORS[gameScore]})`};
    }
  }
`

export const VictoryModalActions = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 24px;
`

export const VictoryModalContainer = styled.div`
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

export const VictoryModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 50%);
`
