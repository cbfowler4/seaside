import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { signup, clearSessionErrors } from '../../actions/session_actions';
import { openLogin, openSignup, closeModal } from '../../actions/ui_actions';



const mapStateToProps = state => {
  return {
    errors: state.errors.session,
    modal_state: state.ui.signup_modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signup: (user) => dispatch(signup(user)),
    clearErrors: () => dispatch(clearSessionErrors()),
    openLogin: () => dispatch(openLogin()),
    openSignup: () => dispatch(openSignup()),
    closeModal: () => dispatch(closeModal()),
  };
};

class UserForm extends React.Component {
  constructor(props){
    super(props);
    this.state = { email: "", fname: "", lname: "", password: ""};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClickAuth = this.handleClickAuth.bind(this);
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
    this.props.signup({user: this.state});
    this.setState({password: ""});
  }

  handleClick() {
    this.props.clearErrors();
    this.setState({ email: "", fname: "", lname: "", password: ""});
    this.props.closeModal();
  }

  handleClickAuth() {
    this.handleClick();
    this.props.openLogin();
  }

  render() {
    let errors;
    if (this.props.errors) {
      errors = this.props.errors.map((error, idx)=> {
        return (<h2 className='auth-error' key={idx}>{error}</h2>);
      });
    }

    if (this.props.modal_state) {
      return (
        <div className="auth-modal-background signup" onClick={this.handleClick}>
          <div className="cf"></div>

        <section className="auth-modal-main" id="signup-modal" onClick={this.stopProp}>
          <form onSubmit={this.handleSubmit}>
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

            <h1>Sign up!</h1>

            {errors}

            <input
              className="email"
              type="email"
              placeholder="Email Address"
              value={this.state.email}
              onChange={this.handleChange("email")}
              />

            <div>
              <input
                className="name"
                type="text"
                placeholder="First Name"
                value={this.state.fname}
                onChange={this.handleChange("fname")}
                />
            </div>

            <div>
              <input
                className="name"
                type="text"
                placeholder="Last Name"
                value={this.state.lname}
                onChange={this.handleChange("lname")}
                />

            </div>

            <div>
              <input
                className="password"
                type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleChange("password")}
                />
            </div>

            <button>Sign Up</button>

            <p>Already have a Seaside account? <a href='#' onClick={this.handleClickAuth}>Log In</a></p>
          </form>
        </section>
        <div className="cf"></div>
      </div>
      );
    } else {
      return (<div></div>);
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserForm));
