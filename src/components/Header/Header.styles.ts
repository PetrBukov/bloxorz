import styled from '@emotion/styled'

export const HeaderContainer = styled.header`
  z-index: 20;

  position: absolute;
  top: 0px;

  width: 100%;
  height: 76px;
  padding: 16px 24px;

  display: grid;
  justify-content: center;
  grid-auto-flow: column;
`

export const LevelNameText = styled.div`
  padding-top: 4px;

  display: flex;
  align-items: center;

  font-family: simpleStamp, sans-serif;
  font-size: 32px;
  color: var(--acidGreen);
`

export const MenuButtonContainer = styled.div`
  position: absolute;
  top: 16px;
  left: 24px;
`
