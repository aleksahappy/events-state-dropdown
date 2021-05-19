import {React, useState} from 'react';
import PropTypes from 'prop-types';
import './Dropdown.css';
import Button from './Button/Button';
import DropdownList from './DropdownList/DropdownList';

export default function Dropdown({items}) {
  const [state, setState] = useState({
    open: false,
    active: 'Account Settings'
  });

  const toggleDropdown = () => {
    setState({...state, open: !state.open});
  };
  const selectItem = (itemValue) => {
    setState({...state, active: itemValue});
  };

  return (
    <div className={`dropdown ${state.open && 'open'}`}>
      <Button label={state.active} onToggle={toggleDropdown}/>
      <DropdownList items={items} active={state.active} onSelect={selectItem}/>
    </div>
  )
}

Dropdown.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired
};
