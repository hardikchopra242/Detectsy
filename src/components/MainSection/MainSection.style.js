import {styled} from './../../styles/theme.config.js'

export const Container = styled('div' , {
  display : 'flex',
  justifyContent : 'space-between',
  alignItems : 'center',
  height : '80vh',
  padding : '0 15vw ',

  '@media only screen and (max-width : 900px)' : {
    justifyContent : 'center',
    padding : '5em',
  }
})

export const SVG = styled('div' , {
  width : '30vw',
})
