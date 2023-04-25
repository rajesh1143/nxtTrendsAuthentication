import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', showSubmitError: false, errorMsg: ''}

  onChangeUsername = event => {
    this.setState({
      username: event.target.value,
    })
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({
      showSubmitError: true,
      errorMsg,
    })
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === 2000) {
      this.onSubmitSuccess()
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  renderUserNameField = () => {
    const {username} = this.state

    return (
      <>
        <label htmlFor="name" className="input-label">
          USERNAME
        </label>
        <input
          type="text"
          id="name"
          className="username-input-filed"
          value={username}
          placeholder="Username"
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  renderPasswordField = () => {
    const {password} = this.state

    return (
      <>
        <label htmlFor="password" className="input-label">
          USERNAME
        </label>
        <input
          type="password"
          id="password"
          className="password-input-filed"
          placeholder="Password"
          value={password}
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  render() {
    const {showSubmitError, errorMsg} = this.state

    return (
      <div className="login-form-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          className="login-website-logo-mobile-image"
          alt="website logo"
        />
        <img
          className="website-login-image"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
        />
        <form className="form-container" onSubmit={this.onSubmitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            className="form-logo"
            alt="website logo"
          />
          <div className="input-container">{this.renderUserNameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <button type="submit" className="login-button">
            Login
          </button>
          {showSubmitError && <p className="error-message">*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}

export default LoginForm
