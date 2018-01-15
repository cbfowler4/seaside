import React from 'react';
import ReviewContainer from '../room_show/review_container';


class UserShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.userId != this.props.userId) {
      this.props.fetchUserInfo(nextProps.userId);
    }
  }

  componentDidMount(nextProps) {
    this.props.fetchUserInfo(this.props.userId);
  }


  render() {
    if (this.props.users[this.props.userId] && this.props.users[this.props.userId].show) {
      const user = this.props.users[this.props.userId];

      const reviews = user.reviewIds.map((reviewId) => {
        return (<ReviewContainer
          key={reviewId}
          reviewId={reviewId}
          user={this.props.users[this.props.reviews[reviewId].authorId]}
          imageUrl={this.props.users[this.props.reviews[reviewId].authorId].imageAvatarUrl}
          new={false}
        />);
      });


      return (
        <main className='user-show-main'>
          <aside>
            <img src={user.imageThumbUrl}/>
            <div className='verified-info'>
              <h3>Verified info</h3>
              <ul>
                <li>Government ID <div></div></li>
                <li>Email Address<div></div></li>
                <li>Phone Number<div></div></li>
              </ul>
            </div>
          </aside>
          <content>
            <header className='user-show-header'>
              <h1>{`${user.fname.includes('&') ? 'Hey, we\'re ' : 'Hey, I\'m '}${user.fname}`}</h1>
              <h2>{`${user.city}, ${user.state}`}</h2>
            </header>
            <div className='user-show-reviews'>
              <h1>Reviews <span>{`(${user.reviewIds.length})`}</span></h1>
              <h2>Reviews From Hosts</h2>
              {reviews}
            </div>
          </content>
        </main>
      );
    } else {
      return null;
    }
  }
}

export default UserShow;
