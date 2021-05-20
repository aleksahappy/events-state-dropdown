import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

export default function Button({label, onToggle}) {
  return (
    <button className="btn" onClick={() => onToggle()}>
      <span>{label}</span>
      <i className="material-icons">public</i>
    </button>
  )
}

Button.propTypes = {
  label: PropTypes.string,
  onToggle: PropTypes.func.isRequired
};
