import {styled} from './../../styles/theme.config.js'

export const Container = styled('div', {
  width : '100%',
  height : '80vh',
})

export const Content = styled('div' , {
  display : 'flex',
  justifyContent : 'flex-start',
  alignItems : 'center',
  flexDirection : 'column',
})

export const Heading = styled('h1', {
  fontSize : '$7',
  fontFamily : '$primary',
  fontWeight : 'bold'
})

export const Main = styled('div', {
  display : 'flex',
  justifyContent : 'flex-start',
  alignItems : 'center',
  width : '100%',
  padding : '2vh 10vh',

  '@media only screen and (max-width : 600px)' : {
    justifyContent : 'center',
    padding : '5vh 5vh',
  }

})

export const SVG = styled('div' , {
  width : '30vw',
  margin : '5vh',
})

export const Para = styled('p' , {
  fontFamily : '$secondary',
})

export const Link = styled('a' , {
  textDecoration : 'underline',
  color : '$secondary'
})
