import React from 'react';

class UserShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUserInfo(this.props.userId);
  }


  render() {
    return (
      <div>hey</div>
    );
  }
}

export default UserShow;
