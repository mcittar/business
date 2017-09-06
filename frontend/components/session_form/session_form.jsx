import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm(user);
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <Link to="/signup">sign up instead</Link>;
    } else {
      return <Link to="/login">log in instead</Link>;
    }
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-form-container">
        <div>
          Welcome to WineSite TM!
          Please { this.props.formType } or { this.navLink() }
          { this.renderErrors() }
        </div>

        <div className="login-form">
          <label>Email:</label>
          <input className="login-input" value={ this.state.email } onChange={ this.update('email') }/>
          
          <label>Password:</label>
          <input className="login-input" type="password" value={ this.state.password } onChange={ this.update('password') }/>
          <button onClick={ this.handleSubmit }>Submit</button>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);