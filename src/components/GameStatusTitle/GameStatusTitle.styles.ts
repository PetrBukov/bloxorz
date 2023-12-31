import { css, keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import { StatusTextVariant } from './GameStatusTitle.types'

const statusBlackLine = keyframes`
    0% {
        background: rgba(0, 0, 0, 0%);
    }
    100% {
        background: rgba(0, 0, 0, 80%);
    }
`

const statusTextTop = keyframes`
    0% {
        left: 0%;
        opacity: 0%;
    }
    100% {
        left: 50%;
        opacity: 100%;
    }
`

const statusTextBottom = keyframes`
    0% {
        opacity: 0%;
        right: 0%;
    }
    100% {
        opacity: 100%;
        right: 50%;
    }
`

export const failureStatusTextStyles = css`
  background-color: var(--red);
  color: var(--white);
`

export const infoStatusTextStyles = css`
  background-color: var(--violet);
  color: var(--acidGreen);
`

export const successStatusTextStyles = css`
  background-color: var(--acidGreen);
  color: var(--black);
`

export const StatusText = styled.div<{ variant: StatusTextVariant }>`
  position: absolute;
  text-align: center;
  background: none;
  font-family: simpleStamp, sans-serif;
  font-size: 32px;
  padding: 5px;
  opacity: 100%;
  white-space: nowrap;

  ${({ variant }) => variant === StatusTextVariant.failure && failureStatusTextStyles}
  ${({ variant }) => variant === StatusTextVariant.info && infoStatusTextStyles}
  ${({ variant }) => variant === StatusTextVariant.success && successStatusTextStyles}

  &:nth-of-type(1) {
    top: -20px;
    left: 50%;
    transform: translateX(-50%) rotate(-2deg);
    margin-left: 30px;

    animation: ${statusTextTop} 1s linear;
  }
  &:nth-of-type(2) {
    bottom: -20px;
    right: 50%;
    transform: translateX(50%) rotate(-2deg);
    margin-right: 30px;

    animation: ${statusTextBottom} 1s linear;
  }
`

export const StatusContainer = styled.div<{ isVisible: boolean }>`
  z-index: 25;

  position: absolute;
  top: 50%;
  left: -5%;
  transform: translateY(-50%) rotate(2deg);

  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};

  height: 80px;
  width: 110%;
  background: rgba(0, 0, 0, 80%);

  animation: ${statusBlackLine} 1s linear;
`

export const StatusInner = styled.div`
  position: relative;
  height: 100%;
`
