import {styled} from './../../styles/theme.config.js'

export const Container = styled('div' , {
  position : 'absolute',
  minWidth: '30vw',
  top : 0,
  right: 0,
  display : 'flex',
  justifyContent : 'center',
  alignItems : 'center',
  flexDirection : 'column',
  padding : '0em 2em',
  background : '$secondary',
  color : '$white',
  borderRadius : '4px'
})

export const Header = styled('div' , {
  fontFamily : '$primary',
  fontSize : '$4',
  padding : '0.5em 0',
})

export const ListContainer = styled('ol' , {
  margin : '0 0 0 0.5em',
})

export const ListElement = styled('li' , {
  marginBottom : '1em',
  fontFamily : '$secondary'
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
