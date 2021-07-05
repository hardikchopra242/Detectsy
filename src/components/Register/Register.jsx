import React from 'react'
import * as S from './../Signin/Signin.style.js'

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: ''
    }
  }

  onNameChange = (event) => {
    this.setState({name: event.target.value})
  }

  onEmailChange = (event) => {
    this.setState({email: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({password: event.target.value})
  }

  onSubmitSignIn = () => {
    fetch('https://cryptic-tor-38866.herokuapp.com/register', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name
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
    return (
      <S.Container>
            <S.Fieldset id="sign_up">
              <S.Header className="head">
                Register
              </S.Header>

              <S.InputContainer>
                <S.InputHeading
                  htmlFor="name">
                  Name
                </S.InputHeading>
                <S.Input
                  type="text"
                  name="name"
                  id="name"
                  onChange={this.onNameChange}
                />
              </S.InputContainer>

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
              value="Register"
            />
      </S.Container>
    );
  }
}

export default Register;
