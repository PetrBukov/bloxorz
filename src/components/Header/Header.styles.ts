import styled from '@emotion/styled'

import whitegrit from '../../assets/images/whitegrit.png'

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

export const HeaderTitle = styled.h2`
  z-index: 20;
  position: relative;
  bottom: 1px;

  margin: 0;
  justify-self: center;

  font-size: 24px;
  line-height: 30px;
  font-weight: 600;
  letter-spacing: 1.8px;

  opacity: 0.6;
`

export const MovesCounter = styled.div<{ visible: boolean }>`
  position: relative;
  z-index: 20;

  width: 30px;
  height: 30px;

  border-radius: 2px;
  background-color: var(--white);
  opacity: ${({ visible }) => (visible ? '0.6' : '0')};

  div {
    position: relative;
    z-index: 21;

    width: 100%;
    height: 100%;
    padding-bottom: 1px;

    display: grid;
    align-items: center;
    justify-items: center;

    font-size: 16px;
    font-weight: 600;
  }

  &::before {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    content: '';
    display: block;
    width: 26px;
    height: 26px;

    border-radius: 50%;

    background: var(--spaceViolet) url(${whitegrit});
    background-size: 500px;
  }
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
