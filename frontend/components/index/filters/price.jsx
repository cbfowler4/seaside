import React from 'react';


class PriceFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.price;
    this.clearFilter = this.clearFilter.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  // addGuest(guestType) {
  //   return (e) => {
  //     let sumGuests = (this.state[guestType] + 1);
  //     this.setState({[guestType]: sumGuests});
  //   };
  // }

  // removeGuest(guestType) {
  //   return ((e) => {
  //     let sumGuests = (this.state[guestType] - 1);
  //     if ((sumGuests > 0 ) || (sumGuests === 0 && guestType!=='adult')) {
  //       this.setState({[guestType]: sumGuests});
  //     }
  //   }).bind(this);
  // }

  updateFilters(price) {
    return ((e) => {
      e.stopPropagation();
      this.props.updateFilters({price: price});
      this.props.handleClose();
    }).bind(this);
  }

  clearFilter(e) {
    e.stopPropagation();
    this.props.clearFilter('price');
    this.props.handleClose();
  }

  stopProp(e) {
    e.stopPropagation();
  }

  handleChange(priceType) {
    return (e) => {
      debugger
      if (priceType === 'min' && e.target.value < this.state.max - 25) {
        this.setState({'min': e.target.value});
      } else if (priceType === 'max' && e.target.value > this.state.min + 25) {
        this.setState({'max': e.target.value});
      }
    };
  }


  render() {
    return (
      <div className='filter-modal-main price-modal' onClick={this.stopProp}>
        <ul>
          <div className='price-range'>{`$${this.state.min} - $${this.state.max}`}</div>
          <div className='slider-container' >
            <input type="range" min="1" max="1000" value={this.state.min} onChange={this.handleChange('min')}/>
            <input type="range" min="1" max="1000" value={this.state.max} onChange={this.handleChange('max')}/>
          </div>
          <div className='filter-links'>
            <a href='#' onClick={this.clearFilter}>Clear Filter</a>
            <a href='#' onClick={this.updateFilters(this.state)}>Apply</a>
          </div>
        </ul>
      </div>
    );
  }
}


export default PriceFilter;
