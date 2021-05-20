import {React, useState} from 'react';
import PropTypes from 'prop-types';
import './Dropdown.css';
import Button from './Button/Button';
import DropdownList from './DropdownList/DropdownList';

export default function Dropdown({items, selectedOption, onSelect}) {
  const [isOpen, toggleOpen] = useState(false);
  const toggleDropdown = () => {
    toggleOpen(prev => !prev);
  };

  return (
    <div className={`dropdown ${isOpen && 'open'}`}>
      <Button label={selectedOption} onToggle={toggleDropdown}/>
      <DropdownList items={items} selectedOption={selectedOption} onSelect={onSelect}/>
    </div>
  )
}

Dropdown.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired
};
