import {styled} from './../../styles/theme.config.js'

export const Container = styled('div' , {
})

export const Form = styled('div' , {
  display : 'flex',
  justifyContent : 'center',
  alignItems : 'center',
  boxShadow :'4px 4px 8px 0px rgba( 0, 0, 0, 0.2 )',
  backgroundColor: '#f5f7fa',
  backgroundSize: '100px 100px, 100px 100px, 50px 50px, 50px 50px',
  padding : '0.5em',
  '@media only screen and (max-width : 600px)' : {
    flexDirection : 'column',
  }
})

export const Input = styled('input' , {
  border : 'none',
  width : '40vw',
  padding : '0 1em',
  fontSize : '$1',
  fontFamily : '$primary',
  lineHeight : '3em',

  '&:focus' : {
    border : 'none',
    outline : 'none'
  }
})

export const Button = styled('button' , {
  border : 'none',
  fontFamily : '$primary',
  padding : '0.5em 1em',

  '&:hover' : {
    transform : 'scale(1.05)',
    transition : '0.3s',
  },

  '&:active' : {
    transform : 'scale(1.0)',
    transition : '0s',
  },
})
