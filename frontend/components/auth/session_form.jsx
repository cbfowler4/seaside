import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';


const mapDispatchToProps = dispatch => {
  return {
    login: (user) => dispatch(login(user)),
  };
};

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = { email: "", password: ""};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.stopProp = this.stopProp.bind(this);
  }

  stopProp (e) {
    e.stopPropagation();
  }

  handleChange(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login({user: this.state});
  }

  handleClick(e) {
    this.props.history.push('/');
  }

  render() {
    return (
    <div className="auth-modal-background" onClick={this.handleClick} >

      <section className="auth-modal-main" id="login-modal" onClick={this.stopProp}>
        <form onSubmit={this.handleSubmit} >

          <div className="exit-modal">
            <span onClick={this.handleClick}>
              <svg viewBox="0 0 24 24" role="img"
                 aria-label="Close" focusable="false">
                <path d="m23.25 24c-.19 0-.38-.07-.53-.22l-10.72-10.72-10.72
                  10.72c-.29.29-.77.29-1.06 0s-.29-.77
                  0-1.06l10.72-10.72-10.72-10.72c-.29-.29-.29-.77 0-1.06s.77-.29
                  1.06 0l10.72 10.72 10.72-10.72c.29-.29.77-.29 1.06 0s .29.77
                  0 1.06l-10.72 10.72 10.72 10.72c.29.29.29.77 0
                  1.06-.15.15-.34.22-.53.22" fillRule="evenodd">
                </path>
              </svg>
            </span>
          </div>

          <h1>Log in to continue</h1>

          <div>
            <input className="email"
              type="email"
              placeholder="Email Address"
              value={this.state.email}
              onChange={this.handleChange("email")}
              />
          </div>

          <div>
            <input className="password"
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange("password")}
              />
          </div>

          <button>Log In</button>

          <p>Don't have an account? <Link to='/signup'>Sign Up</Link></p>
        </form>
      </section>
      <div className="cf"></div>
    </div>
    );
  }
}

export default withRouter(connect(null, mapDispatchToProps)(SessionForm));
