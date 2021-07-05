import { createCss } from "@stitches/react";

export const { styled, css, global, getCssString } = createCss({
    theme: {
      colors: {
        black          : '#030303',
        white          : '#efefef',
        primary        : '#0c0e10',
        secondary      : '#34393E',
        font           : '#777f8d',
        main           : '#ba85fa',
      },

      fonts: {
        primary  : 'Lexend Deca, sans-serif',
        secondary: 'Rubik,sans-serif',
        code     : 'monospace',
      },

      fontSizes: {
        1: '14px',
        2: '18px',
        3: '20px',
        4: '24px',
        5: '36px',
        6: '44px',
        7: '56px',
      },
    }
})

export const Layout = styled('div',{
  position: 'relative',
  overflow: 'hidden'
})
