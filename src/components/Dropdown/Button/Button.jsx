import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

export default function Button({label, onToggle}) {
  return (
    <button class="btn" onClick={() => onToggle()}>
      <span>{label}</span>
      <i class="material-icons">public</i>
    </button>
  )
}

Button.propTypes = {
  active: PropTypes.string.isRequired,
  onToggle: PropTypes.func.isRequired
};
