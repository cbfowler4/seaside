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
  }

  handleChange(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    login({user: this.state});
  }

  handleClick(e) {
    this.props.history.goBack();
  }

  render() {
    return (
      <div className="auth-modal-background" onClick={this.handleClick}>
        <section className="auth-modal-main">
          <form onSubmit={this.handleSubmit}>

            <div className="exit-modal">
              <span onClick={this.handleClick}>
                &#10005;
              </span>
            </div>

            <h1>Log in to continue</h1>

            <input
              type="text"
              placeholder="Email Address"
              value={this.state.email}
              onChange={this.handleChange("email")}
              />

            <input
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange("password")}
              />

            <button>Log In</button>

            <p>Don't have an account? <Link to='/signup'>Sign Up</Link></p>
          </form>
        </section>
      </div>
    );
  }
}

export default withRouter(connect(null, mapDispatchToProps)(SessionForm));
