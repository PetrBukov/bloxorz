import styled from '@emotion/styled'

export const LevelList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 80px);
  grid-auto-rows: 80px;
  gap: 8px;
  overflow-y: auto;
  padding: 12px;
`

export const LevelsMenuContainer = styled.div`
  display: grid;
  width: auto;
  height: auto;
  max-width: 600px;
  max-height: 450px;

  background: rgba(0, 0, 0, 60%);
  border-radius: 2px;

  grid-template-rows: 40px 1fr;
`

export const LevelButton = styled.button<{ isCompleted: boolean }>`
  opacity: 0.9;

  padding: 0;
  padding-top: 6px;
  border: 0;
  background-color: ${({ isCompleted }) =>
    isCompleted ? 'var(--acidGreen)' : 'rgba(255, 255, 255, 80%)'};

  font-family: simpleStamp, sans-serif;
  font-size: 50px;

  &:hover {
    opacity: 1;
  }
`
