import styled from '@emotion/styled'

export const HeaderContainer = styled.header`
  z-index: 20;

  position: absolute;
  top: 0px;
  left: 50%;
  transform: translateX(-50%);

  width: 100%;
  height: 62px;
  padding: 16px 24px;

  display: grid;
  justify-content: center;
  grid-auto-flow: column;
  grid-template-columns: 1fr 6fr 1fr;
  grid-auto-rows: 30px;

  font-family: 'Exo 2', Arial, sans-serif;
  color: var(--white);
`

export const MenuButton = styled.button`
  position: relative;

  width: 30px;
  height: 30px;

  justify-self: end;

  opacity: 0.6;

  background-color: transparent;
  border: none;
  font-size: 0px;
  padding: 0;

  svg {
    color: var(--white);
  }

  &:hover,
  &:focus {
    opacity: 1;
  }

  &:disabled {
    opacity: 0;
  }
`
