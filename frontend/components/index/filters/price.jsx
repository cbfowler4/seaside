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
    return ((e) => {
      console.log("hey");
      if (priceType === 'min' && parseInt(e.target.value) < parseInt(this.state.max) - 30) {
        this.setState({'min': e.target.value});
      } else if (priceType === 'max' && parseInt(e.target.value) > parseInt(this.state.min) + 30) {
        this.setState({'max': e.target.value});
      }
    }).bind(this);
  }


  render() {
    return (
      <div className='filter-modal-main price-modal' onClick={this.stopProp}>
        <ul>
          <li>{`$${this.state.min} - $${this.state.max}`}</li>
          <li className = 'price-slider'>
            <span>Min Price </span>
            <input type="range" min="1" max="1000" value={this.state.min} onChange={this.handleChange('min')}/>
          </li>
          <li className = 'price-slider'>
            <span>Max Price </span>
            <input type="range" min="1" max="1000" value={this.state.max} onChange={this.handleChange('max')}/>
          </li>
          <li className='filter-links'>
            <a href='#' onClick={this.clearFilter}>Clear Filter</a>
            <a href='#' onClick={this.updateFilters(this.state)}>Apply</a>
          </li>
        </ul>
      </div>
    );
  }
}


export default PriceFilter;
