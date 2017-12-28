import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';


const mapDispatchToProps = dispatch => {
  return {
    login: (user) => dispatch(login(user)),
  };
};

class SessionForm extends React.Component {

  render() {
    return (
      <div className="login-modal-background">
        <section className="login-modal-main">
          <h1>Login</h1>
        </section>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(SessionForm);
