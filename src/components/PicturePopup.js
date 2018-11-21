import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PicturePopup extends Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    return (
      <div className="pic-popup">
        <div
          className="background-tint"
          onClick={this.props.onPopCloseSelect}
        />
        <picture className="box">
          {/* <img src={this.props.data.image} alt={this.props.data.petName} /> */}
          <div className="image"></div>
        </picture>
      </div>
    );
  }
}

PicturePopup.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string,
    source: PropTypes.string,
    petName: PropTypes.string,
    thumbUrl: PropTypes.string,
  }).isRequired,
  onPopCloseSelect: PropTypes.func.isRequired,
};
