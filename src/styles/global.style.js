import { global, lightTheme } from './theme.config.js'
import background from './../images/animated.svg'

const globalStyle = global({

  '*' : {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    scrollBehavior: 'smooth',
  },

  'html,body' : {
    overflowX : 'hidden',
  },

  body : {
    backgroundColor : '#c3cfe2',
    backgroundImage : `url(${background})`,
  },

  '::selection' : {

  },

  img : {
    userSelect : 'none',
  },

  h1 : {
    color:'$black',
    fontFamily: '$primary',
    userSelect : 'none',
    fontSize : '$5',
    '@media only screen and (max-width : 600px)' : {
      fontSize : '$5 !important',
    }
  },

  '.clear' : {
    display : 'none !important',
  },

  '.hideSmall' : {
    '@media only screen and (max-width : 600px)' : {
      display : 'none',
    },
  },

  '.hideMedium' : {
    '@media only screen and (max-width : 900px)' : {
      display : 'none !important',
    },
  },

  '.head' : {
  	background: '-webkit-linear-gradient(top left, #050505, #3B6BAD)',
  	background: '-moz-linear-gradient(top left, #050505, #3B6BAD)',
  	background: 'linear-gradient(to bottom right, #050505, #3B6BAD)',
  	'-webkit-text-fill-color' : 'transparent',
  	'-webkit-background-clip' : 'text',
  },

  '.flexColumn' : {
    '@media only screen and (max-width : 600px)' : {
      flexDirection : 'column',
    }
  },

})

export default globalStyle
