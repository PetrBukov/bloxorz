import styled from '@emotion/styled'

export const LevelList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-auto-rows: 120px;
  gap: 8px;
  overflow-y: auto;
  padding: 12px;
`

export const LevelsMenuContainer = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  max-width: 600px;
  max-height: 450px;
  padding-bottom: 12px;

  background: rgba(0, 0, 0, 60%);
  border-radius: 2px;

  grid-template-rows: 40px 1fr;
`

export const LevelButton = styled.button`
  opacity: 0.9;

  padding: 0;
  border: 0;
  background-color: rgba(255, 255, 255, 80%);

  font-family: simpleStamp, sans-serif;
  font-size: 50px;

  &:hover {
    opacity: 1;
  }
`
