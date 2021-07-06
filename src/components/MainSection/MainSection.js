import Home from './../Home/Home.jsx'
import Signin from './../Signin/Signin.jsx'
import Register from './../Register/Register.jsx'

import * as S from './../MainSection/MainSection.style.js'
import signin_image from './../../images/signin.svg';

const MainSection = ({route, loadUser, onRouteChange}) => {
    return(
      <>
      {
      route ==='signin' || route === 'register'
      ?
        <S.Container>
          <S.SVG className='hideMedium'>
                <img src = {signin_image} alt = 'signin'  />
          </S.SVG>
          {
            route === 'signin'
            ? <Signin loadUser={loadUser} onRouteChange={onRouteChange} />
            : <Register loadUser={loadUser} onRouteChange={onRouteChange} />
          }
        </S.Container>
      :
        <Home/>
    }
    </>
  )
}

export default MainSection
