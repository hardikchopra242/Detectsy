import {styled} from './../../styles/theme.config.js'

export const Container = styled('div' , {
  display : 'flex',
  justifyContent : 'center',
  alignItems : 'flex-start',
  minHeight : '80vh',

})

export const Content = styled('div' , {
  width : '60vw',
  display : 'flex',
  justifyContent : 'center',
  alignItems : 'center',
  flexDirection : 'column',
  margin : '5vh',
  '@media only screen and (max-width : 600px)' : {
    width : '80vw',
  }
})
