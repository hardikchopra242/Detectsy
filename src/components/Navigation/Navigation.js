import Howto from  '../Howto/Howto'
import * as S from  './Navigation.style.js'

const Navigation = ({ name, onRouteChange, isSignedIn}) => {

  const SignIn =
                  <S.Container>
                    <h1>
                      Welcome,
                      <S.Name className="head"> {name}</S.Name> !
                    </h1>
                    <S.ButtonContainer>
                      <Howto />
                      <S.Button onClick={() => onRouteChange('')}> SIGN OUT </S.Button>
                    </S.ButtonContainer>
                  </S.Container>

  const SignOut =
                  <S.Container>
                    <h1 onClick={() => onRouteChange('')} >HC</h1>
                    <S.ButtonContainer >
                      <S.Button onClick={() => onRouteChange('register')} >REGISTER</S.Button>
                      <S.Button onClick={() => onRouteChange('signin')} >SIGN IN</S.Button>
                    </S.ButtonContainer>
                  </S.Container>

    return isSignedIn ? SignIn : SignOut
}

export default Navigation;
