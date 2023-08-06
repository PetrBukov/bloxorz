import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const closeIconStyles = css`
  &::before,
  &::after {
    width: 4px;
    height: 22px;
  }

  &::before {
    transform: translateX(4px) rotate(45deg);
  }

  &::after {
    transform: translateX(-4px) rotate(-45deg);
  }
`

export const IconButton = styled.button<{ iconType: 'close' | 'pause' }>`
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
  gap: 4px;

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

  ${({ iconType }) => iconType === 'close' && closeIconStyles}

  &:hover {
    opacity: 1;
  }

  &:disabled {
    opacity: 0;
  }
`
