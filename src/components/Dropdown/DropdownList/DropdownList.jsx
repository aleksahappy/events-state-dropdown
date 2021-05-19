import React from 'react';
import PropTypes from 'prop-types';
import DropdownItem from './DropdownItem/DropdownItem';

export default function DropdownList({items, active, onSelect}) {
  return (
    <ul className="dropdown-list">
      {items.map((item, i) => {
        return <DropdownItem key={i} item={item} active={active} onSelect={onSelect}/>
      })}
    </ul>
  )
}

DropdownList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  active: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
};
