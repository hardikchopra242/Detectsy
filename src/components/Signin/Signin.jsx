import React from 'react';
import * as S from './Signin.style.js'

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: ''
    }
  }

  onEmailChange = (event) => {
    this.setState({signInEmail: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value})
  }

  onSubmitSignIn = () => {
    fetch('https://cryptic-tor-38866.herokuapp.com/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user)
          this.props.onRouteChange('home');
        }
      })
  }

  render() {
    const { onRouteChange } = this.props;
    return (
      <S.Container className = 'animate__animated animate__fadeInRight'>
          <S.Fieldset id="sign_up">
            <S.Header className="head">
              Sign In
            </S.Header>
            <S.InputContainer>
              <S.InputHeading
                htmlFor="email-address">
                Email
              </S.InputHeading>
              <S.Input
                type="email"
                name="email-address"
                id="email-address"
                onChange={this.onEmailChange}
              />
            </S.InputContainer>
            <S.InputContainer>
              <S.InputHeading
                htmlFor="password">
                Password
              </S.InputHeading>
              <S.Input
                type="password"
                name="password"
                id="password"
                onChange={this.onPasswordChange}
              />
            </S.InputContainer>
          </S.Fieldset>

          <S.Submit
            onClick={this.onSubmitSignIn}
            type="submit"
            value="Sign in"
          />

          <S.Register
            onClick={() => onRouteChange('register')}>
            Register
          </S.Register>
      </S.Container>
    );
  }
}

export default Signin;
