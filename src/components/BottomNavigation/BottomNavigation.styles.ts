import styled from '@emotion/styled'

export const BottomNavigationContainer = styled.nav`
  width: 100vw;
  max-width: 400px;
  padding: 16px 24px;

  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 24px;
`
