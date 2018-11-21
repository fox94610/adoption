// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';

type Props = {
  labelOn?: string,
  labelOff?: string,
};

type State = {
  isChecked: boolean,
};

export default class CheckboxWithLabel extends Component<Props, State> {
  static defaultProps = {
    labelOn: 'On',
    labelOff: 'Off',
  };

  constructor(props: Props) {
    // console.log(props)
    super(props);
    this.state = { isChecked: false };
    this.onChange = this.onChange.bind(this);
  }

  onChange: Function;

  onChange() {
    this.setState({ isChecked: !this.state.isChecked });
  }

  render() {
    return (
      <label>
        <input
          type="checkbox"
          checked={this.state.isChecked}
          onChange={this.onChange}
        />
        {this.state.isChecked ? this.props.labelOn : this.props.labelOff}
      </label>
    );
  }
}

CheckboxWithLabel.propTypes = {
  labelOn: PropTypes.string,
  labelOff: PropTypes.string,
};
