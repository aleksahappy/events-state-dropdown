import React from 'react';
import PropTypes from 'prop-types';

export default  function DropdownItem({item, active, onSelect}) {
  const isActive = item === active && 'active';
  return (
    <li className={isActive} onClick={() => onSelect(item)}><a href="#">{item}</a></li>
  )
}

DropdownItem.propTypes = {
  item: PropTypes.string.isRequired,
  active: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
};
