import React from 'react';
import PropTypes from 'prop-types';
import DropdownItem from './DropdownItem/DropdownItem';

export default function DropdownList({items, selectedOption, onSelect}) {
  return (
    <ul className="dropdown-list">
      {items.map((item, i) => {
        return <DropdownItem key={i} item={item} selectedOption={selectedOption} onSelect={onSelect}/>
      })}
    </ul>
  )
}

DropdownList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedOption: PropTypes.string,
  onSelect: PropTypes.func.isRequired
};
