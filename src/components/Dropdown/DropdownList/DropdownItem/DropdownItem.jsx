import React from 'react';
import PropTypes from 'prop-types';

export default  function DropdownItem({item, selectedOption, onSelect}) {
  const isActive = item === selectedOption ? 'active' : '';

  return (
    <li className={isActive} onClick={() => onSelect(item)}>
      <div>{item}</div>
    </li>
  )
}

DropdownItem.propTypes = {
  item: PropTypes.string.isRequired,
  selectedOption: PropTypes.string,
  onSelect: PropTypes.func.isRequired
};
