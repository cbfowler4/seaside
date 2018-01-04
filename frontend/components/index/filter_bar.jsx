import React from 'react';

class FilterBar extends React.Component {
  constructor(props) {
    super(props);

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.stopProp = this.stopProp.bind(this);

  }

  handleOpen(filterType) {
    return (e) => {
      this.props.openFilter(filterType);
      const el = document.getElementById(filterType);
      el.classList.add('filter-active');
      el.classList.remove('filter-inactive');
    };
  }

  handleClose (filterType) {
    return (e) => {
      this.props.closeModal();
      const el = document.getElementById(filterType);
      el.classList.remove('filter-active');
      el.classList.add('filter-inactive');
    };
  }

  stopProp(e) {
    e.stopPropagation();
  }

  getModal() {
    switch (this.props.filterModal) {
      case "guest":
        return (
          <div className='filter-modal-background' onClick={this.handleClose(this.props.filterModal)}>
            <div className='filter-modal-main' onClick={this.stopProp}>
              this is a modal
            </div>
          </div>
        );
      default:
        return (<div></div>);
    }
  }

  render() {
    const modalShown = this.getModal();

    return (
      <div className='filter-bar'>
        <button id='guest' onClick={this.handleOpen('guest')}>Guests</button>
        {modalShown}
      </div>
    );
  }
}

export default FilterBar;
