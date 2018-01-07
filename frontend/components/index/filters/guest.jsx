import React from 'react';


class GuestFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.guests;
    this.clearFilter = this.clearFilter.bind(this);
  }
  addGuest(guestType) {
    return (e) => {
      let sumGuests = (this.state[guestType] + 1);
      this.setState({[guestType]: sumGuests});
    };
  }

  removeGuest(guestType) {
    return ((e) => {
      let sumGuests = (this.state[guestType] - 1);
      if ((sumGuests > 0 ) || (sumGuests === 0 && guestType!=='adult')) {
        this.setState({[guestType]: sumGuests});
      }
    }).bind(this);
  }

  updateFilters(guest) {
    return ((e) => {
      e.stopPropagation();
      this.props.updateFilters({guests: guest});
      this.props.handleClose();
    }).bind(this);
  }

  clearFilter(e) {
    e.stopPropagation();
    this.props.clearFilter('guest');
    this.props.handleClose();
  }

  stopProp(e) {
    e.stopPropagation();
  }


  render() {
    return (
      <div className='filter-modal-main guest-modal' onClick={this.stopProp}>
        <ul>
          <li><div>Adults</div>
            <img onClick={this.removeGuest('adult')} src={window.staticImages.minusImage}></img>
            <span>{`${this.state.adult}+`}</span>
            <img onClick={this.addGuest('adult')} src={window.staticImages.plusImage}></img>
          </li>
          <li><div>Children</div>
            <img onClick={this.removeGuest('child')} src={window.staticImages.minusImage}></img>
            <span>{`${this.state.child}+`}</span>
            <img onClick={this.addGuest('child')} src={window.staticImages.plusImage}></img>
          </li>
          <div className='filter-links'>
            <a onClick={this.clearFilter}>Clear Filter</a>
            <a onClick={this.updateFilters(this.state)}>Apply</a>
          </div>
        </ul>
      </div>
    );
  }
}


export default GuestFilter;
