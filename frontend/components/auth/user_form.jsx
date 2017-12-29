import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';


const mapDispatchToProps = dispatch => {
  return {
    signup: (user) => dispatch(signup(user)),
  };
};

class UserForm extends React.Component {
  constructor(props){
    super(props);
    this.state = { email: "", fname: "", lname: "", password: ""};
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
    this.props.signup({user: this.state});
  }

  handleClick(e) {
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <div className="auth-modal-background" onClick={this.handleClick}>
        </div>
      <section className="auth-modal-main" id="signup-modal">
        <form onSubmit={this.handleSubmit}>

          <div className="exit-modal">
            <span onClick={this.handleClick}>
              &#10005;
            </span>
          </div>

          <h1>Sign up!</h1>

          <input
            type="text"
            placeholder="Email Address"
            value={this.state.email}
            onChange={this.handleChange("email")}
            />

          <input
            type="text"
            placeholder="First Name"
            value={this.state.fname}
            onChange={this.handleChange("fname")}
            />

          <input
            type="text"
            placeholder="Last Name"
            value={this.state.lname}
            onChange={this.handleChange("lname")}
            />

          <input
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange("password")}
            />

          <button>Sign Up</button>

          <p>Already have a Seaside account? <Link to='/login'>Log In</Link></p>
        </form>
      </section>
    </div>

    );
  }
}

export default withRouter(connect(null, mapDispatchToProps)(UserForm));
