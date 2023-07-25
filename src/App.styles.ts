import { css } from '@emotion/react'

export const COLORS = {
  white: '#ffffff',
  gray: {
    100: '#f4f7f9',
    200: '#e8eff5',
    300: '#cfd7de',
    400: '#a8b1ba',
    500: '#7d828c',
    600: '#5b636c',
    700: '#475059',
    800: '#323c47',
    900: '#242c34',
  },
  black: '#2e2e2e',
  trueBlack: '#000000',
  violet: '#543da4',
  spaceViolet: '#463944',
  yellow: '#f7c845',
  red: '#ff4949',
  green: '#56c6c0',
  acidGrid: '#dbff05',
} as const

export const globalStyles = css`
  :root {
    --white: ${COLORS.white};
    --gray100: ${COLORS.gray[100]};
    --gray200: ${COLORS.gray[200]};
    --gray300: ${COLORS.gray[300]};
    --gray400: ${COLORS.gray[400]};
    --gray500: ${COLORS.gray[500]};
    --gray600: ${COLORS.gray[600]};
    --gray700: ${COLORS.gray[700]};
    --gray800: ${COLORS.gray[800]};
    --gray900: ${COLORS.gray[900]};
    --black: ${COLORS.black};
    --trueBlack: ${COLORS.trueBlack};
    --violet: ${COLORS.violet};
    --spaceViolet: ${COLORS.spaceViolet};
    --yellow: ${COLORS.yellow};
    --red: ${COLORS.red};
    --green: ${COLORS.green};
    --acidGreen: ${COLORS.acidGrid};
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
