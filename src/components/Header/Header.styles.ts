import styled from '@emotion/styled'

export const HeaderContainer = styled.header`
  position: absolute;
  top: 0px;

  width: 100%;
  height: 80px;
  padding: 16px 24px;

  display: grid;
  justify-content: space-between;
`

export const PauseButton = styled.button`
  position: relative;
  opacity: 0.9;

  padding: 0;
  border: 0;
  background-color: transparent;
  font-size: 0px;

  width: 60px;
  height: 60px;
  border: 4px solid rgba(255, 255, 255, 80%);
  border-radius: 50%;

  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: center;
  gap: 2px;

  &::before {
    content: '';
    display: block;
    width: 20px;
    height: 30px;
    border-left: 5px solid rgba(255, 255, 255, 80%);
    border-right: 5px solid rgba(255, 255, 255, 80%);
  }

  &:hover {
    opacity: 1;
  }
`
