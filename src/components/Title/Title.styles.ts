import styled from '@emotion/styled'

export const TitleContainer = styled.div<{ color: string }>`
  margin: -20px 0 20px;
  padding: 2px;
  text-align: center;
  transform: rotate(-1deg);
  background: none;
  font-family: simpleStamp, sans-serif;
  font-size: 32px;

  span {
    background-color:${({ color }) => color};
    padding: 5px;
  }
}
`
