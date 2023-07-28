import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const HeaderContainer = styled.header`
  position: absolute;
  top: 0px;

  width: 100%;
  height: 76px;
  padding: 16px 24px;

  display: grid;
  justify-content: center;
  grid-auto-flow: column;
`

export const LevelName = styled.div`
  font-family: simpleStamp, sans-serif;
  font-size: 32px;
  color: var(--acidGreen);

  display: flex;
  align-items: center;

  padding-top: 4px;
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

export const MenuButtonContainer = styled.div`
  position: absolute;
  top: 16px;
  left: 24px;
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
