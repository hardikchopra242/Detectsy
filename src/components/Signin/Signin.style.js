
import {styled} from './../../styles/theme.config.js'

export const Container = styled('div' , {
  padding : '2em',
  border : '1px solid #00000020',
  boxShadow : '4px 4px 8px 0px rgba( 0, 0, 0, 0.2)',
  borderRadius : '8px',
  textAlign : 'center',
})

export const Header = styled('legend' , {
  fontSize : '$6',
  fontFamily : '$primary',
  fontWeight : 'bold'
})

export const Fieldset = styled('fieldset' , {
  border : 'none',
})

export const InputContainer = styled('div' , {
  marginTop : '1em',
  width : '15em',
})

export const InputHeading = styled('label' , {
  display : 'block',
  fontSize : '$1',
  color : '$black',
  fontWeight : 'bold',
  fontFamily : '$secondary',
  lineHeight : '1.5em'
})

export const Input = styled('input' , {
  background : 'transparent',
  border : '1px solid $black',
  padding : '0.6em 0.5em',
  width : '100%',
  fontSize : '$1',
  fontFamily : '$secondary',
  borderRadius : '3px',
  '-webkit-appearance' : 'none',
  '-moz-appearance' : 'none',

  '&:focus' : {
    outline : 'none',
  }
})

export const Submit = styled('input' , {
  border :  'none',
  outline : 'none',
  border : '1px solid $black',
  background : 'none',
  fontSize : '$1',
  fontWeight : 'bold',
  fontFamily :  '$secondary',
  padding : '0.6em 1em',
  margin : '1em',
  '-webkit-appearance' : 'none',
  '-moz-appearance' : 'none',
  cursor : 'pointer',

  '&:hover' : {
    transform : 'scale(1.05)',
    transition : '0.3s',
  },

  '&:active' : {
    transform : 'scale(1.0)',
    transition : '0s',
  },
})


export const Register = styled('p' , {
  fontSize : '$1',
  fontFamily : '$secondary',
  margin : '0.5em',
  cursor : 'pointer',

  '&:hover' : {
    color : '#00000090',
  }
})
