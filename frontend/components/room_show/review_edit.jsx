import React from 'react';

class ReviewEdit extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      body: this.props.review.body,
      rating: this.props.review.rating,
      authorId: this.props.authorId,
      roomId: this.props.roomId
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (e) {
    this.props.createReview(this.state);
    e.stopPropagation();
  }

  handleChange(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <textarea value={this.state.body} onChange={this.handleChange('body')}>
        </textarea>
        <button>Create Review</button>
      </form>
    );
  }
}

export default ReviewEdit;
