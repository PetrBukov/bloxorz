import { css, keyframes } from '@emotion/react'
import styled from '@emotion/styled'

const spinSquare = keyframes`
  0% {
   transform: rotate(0deg);
  }
  100% {
    transform: rotate(90deg);
  }
`

export const HeaderContainer = styled.header`
  position: absolute;
  top: 0px;

  width: 100%;
  padding: 16px 24px;

  display: grid;
  justify-content: space-between;
  grid-auto-flow: column;
`

export const closeIconStyles = css`
  &::before,
  &::after {
    width: 4px;
    height: 22px;
  }

  &::before {
    transform: translateX(5px) rotate(45deg);
  }

  &::after {
    transform: translateX(-5px) rotate(-45deg);
  }
`

export const MenuButton = styled.button<{ icon: 'close' | 'pause' }>`
  position: relative;
  opacity: 0.8;

  padding: 0;
  border: 0;
  background-color: transparent;
  font-size: 0px;

  width: 42px;
  height: 42px;
  border: 4px solid rgba(255, 255, 255, 80%);
  border-radius: 50%;

  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: center;
  gap: 3px;

  &::before,
  &::after {
    content: '';
    display: block;
    width: 5px;
    height: 20px;
    background-color: rgba(255, 255, 255, 80%);
    transform: translateX(0px) rotate(0);

    transition-duration: 0.5s;
  }

  ${({ icon }) => icon === 'close' && closeIconStyles}

  &:hover {
    opacity: 1;
  }

  &:disabled {
    opacity: 0;
  }
`

export const MovesCounterContainer = styled.div`
  display: grid;
  grid-template-columns: 25px minmax(25px, auto);
  align-items: center;
  justify-items: end;
  gap: 16px;

  color: var(--white);
  font-size: 24px;
  font-weight: 600;
`
export const MovesCounterIndicator = styled.div`
  background-color: var(--acidGreen);
  opacity: 0.8;
  width: 25px;
  height: 25px;

  animation: ${spinSquare} 0.4s linear;
`
