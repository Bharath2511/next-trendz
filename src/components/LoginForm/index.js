import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    isValidInput: true,
    errorMessage: '',
  }

  changeUsername = event => {
    this.setState({username: event.target.value})
  }

  changePassword = event => {
    this.setState({password: event.target.value})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {
      username,
      password,
    }
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.successHandler()
    } else {
      this.failureHandler(data.error_msg)
    }
  }

  successHandler = () => {
    const {history} = this.props
    history.replace('/')
    // this.setState({isValidInput: true})
  }

  failureHandler = errorMessage => {
    this.setState({isValidInput: false, errorMessage})
  }

  displayErrorMessage = () => {
    const {errorMessage} = this.state
    return <p className="error-message">*{errorMessage}</p>
  }

  render() {
    const {username, password, isValidInput} = this.state
    return (
      <div className="login-page-container">
        <div className="login-container">
          <div className="header-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
              className="website-logo-login"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
              alt="website login"
              className="login-image"
            />
          </div>
          <div className="login-form-wrapper">
            <div className="img-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
                alt="website logo"
                className="form-logo"
              />
            </div>
            <form className="login-form" onSubmit={this.submitForm}>
              <div className="input-container">
                <label htmlFor="username" className="label">
                  USERNAME
                </label>
                <input
                  id="username"
                  type="text"
                  className="username"
                  placeholder="Username"
                  value={username}
                  onChange={this.changeUsername}
                />
              </div>
              <div className="input-container">
                <label htmlFor="password" className="label">
                  PASSWORD
                </label>
                <input
                  id="password"
                  type="password"
                  className="password"
                  value={password}
                  placeholder="Password"
                  onChange={this.changePassword}
                />
              </div>
              <button className="login-button" type="submit">
                Login
              </button>
            </form>
            {!isValidInput && this.displayErrorMessage()}
          </div>
        </div>
      </div>
    )
  }
}

export default LoginForm
