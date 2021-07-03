import {styled} from './../../styles/theme.config.js'

export const Container = styled('div',{
  margin : '2em auto',
})

export const Content = styled('div',{
  position : 'relative',
})

export const BoundingBox = styled('div',{
  position : 'absolute',
  boxShadow : '0 0 0 3px #6df214 inset',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
})
