import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'

const statusBlackLine = keyframes`
    0% {
        background: rgba(0, 0, 0, 0%);
    }
    100% {
        background: rgba(0, 0, 0, 80%);
    }
`

const failureStatusItem1 = keyframes`
    0% {
        opacity: 0;
        left: 0%;
    }
    100% {
        opacity: 1;
        left: 50%;
    }
`

const failureStatusItem2 = keyframes`
    0% {
        opacity: 0;
        right: 0%;
    }
    100% {
        opacity: 1;
        right: 50%;
    }
`

export const FailureStatusContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%) rotate(2deg);

  height: 80px;
  width: 100%;
  background: rgba(0, 0, 0, 80%);

  animation: ${statusBlackLine} 1s linear;
`

export const FailureStatusInner = styled.div`
  position: relative;
  height: 100%;

  div {
    position: absolute;
    transform: rotate(-2deg);
    text-align: center;
    background: none;
    font-family: simpleStamp, sans-serif;
    font-size: 32px;

    background-color: var(--red);
    color: var(--white);
    padding: 5px;
  }

  div:nth-of-type(1) {
    top: -20px;
    left: 50%;
    transform: translateX(-50%) rotate(-2deg);
    opacity: 1;
    margin-left: 30px;

    animation: ${failureStatusItem1} 2s;
  }
  div:nth-of-type(2) {
    bottom: -20px;
    right: 50%;
    transform: translateX(50%) rotate(-2deg);
    opacity: 1;
    margin-right: 30px;

    animation: ${failureStatusItem2} 2s;
  }
`
