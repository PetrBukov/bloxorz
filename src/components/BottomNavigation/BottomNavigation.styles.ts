import styled from '@emotion/styled'

export const BottomNavigationContainer = styled.nav`
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);

  width: 100%;
  max-width: 400px;
  padding: 16px 24px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 24px;

  z-index: 20;
`
