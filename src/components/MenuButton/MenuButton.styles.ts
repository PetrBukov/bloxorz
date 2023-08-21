import styled from '@emotion/styled'

export const MenuButtonContainer = styled.button`
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
