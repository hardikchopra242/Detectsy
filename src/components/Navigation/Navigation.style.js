import { styled } from './../../styles/theme.config.js'

export const Container = styled('nav' , {
  display : 'flex',
  alignItems : 'center',
  justifyContent : 'space-between',
  margin : '0 1em',
  '@media only screen and (max-width : 600px)' : {
  }
})

export const Name = styled('span', {
  textTransform : 'capitalize'
})

export const ButtonContainer = styled('div' , {
  display : 'flex',
  justifyContent : 'center',
  alignItems : 'center'
})

export const Button = styled('button' , {
  background : 'none',
  outline : 'none',
  border : '2px solid $secondary',
  borderRadius : '5px',
  color : '$black',
  fontFamily : '$primary',
  padding : '0.5em',
  margin : '0.5em',
  transition : '0.4s',
  '@media only screen and (min-width : 600px)' : {
    '&:hover' : {
      background : '#ffffff'
    }
  }
})
