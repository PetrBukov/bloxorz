import { css } from '@emotion/react'
import styled from '@emotion/styled'
import whitegrit from './assets/images/whitegrit.png'

export const globalStyles = css`
  :root {
    --white: #ffffff;
    --gray100: #f4f7f9;
    --gray200: #e8eff5;
    --gray300: #cfd7de;
    --gray400: #a8b1ba;
    --gray500: #7d828c;
    --gray600: #5b636c;
    --gray700: #475059;
    --gray800: #323c47;
    --gray900: #242c34;
    --black: #2e2e2e;
    --trueBlack: #000000;
    --violet: #543da4;
    --spaceViolet: #463944;
    --yellow: #f7c845;
    --red: #ff4949;
  }

  html {
    box-sizing: border-box;
    font-family: sans-serif;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    overscroll-behavior: none;
  }

  html,
  body,
  #root {
    height: 100%;
    max-height: 100vh;
    overflow: hidden;
  }

  #root {
    display: grid;
  }

  /* Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 12px;
  }
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--yellow) var(--trueBlack);
  }
  body::-webkit-scrollbar-track {
    background: var(--trueBlack);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--yellow);
    border-radius: 6px;
    border: 3px solid var(--trueBlack);
  }
`
export const Main = styled.main`
  background: var(--spaceViolet) url(${whitegrit});
  background-size: 500px;
  display: grid;
  justify-items: center;
  align-items: center;
  padding: 12px 24px 38px 24px;
`
