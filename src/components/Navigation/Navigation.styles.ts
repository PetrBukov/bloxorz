import styled from '@emotion/styled'

import whitegrit from '../../assets/images/whitegrit.png'
import { appearanceAnimation } from '../../App.styles'

export const NavigationContainer = styled.nav`
  z-index: 20;
  position: absolute;
  top: 0px;
  left: 0px;

  width: 100%;
  height: 100%;
  padding: 16px 24px;

  display: grid;
  justify-items: center;
  align-items: center;

  background: var(--black) url(${whitegrit});
  background-size: 500px;

  animation: ${appearanceAnimation} 0.5s ease-out;
`

export const NavigationItemsList = styled.ul`
  margin: 0;
  padding: 0;

  display: grid;
  grid-auto-rows: 30px;
  gap: 24px;
`

export const NavigationItem = styled.li`
  display: grid;
`

export const NavigationButton = styled.button`
  padding: 0;
  border: none;
  background-color: transparent;

  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: start;
  gap: 24px;

  font-family: 'Exo 2', Arial, sans-serif;
  color: var(--white);
  font-size: 24px;
  line-height: 1;
  filter: drop-shadow(0px 0px 0px var(--white));

  transition: 0.5s;

  > div {
    padding-bottom: 3px;
  }

  &:hover,
  &:focus {
    color: var(--acidGreen);
    filter: drop-shadow(0px 0px 1px var(--acidGreen));
  }
`
