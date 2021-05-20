import {React, useState} from 'react';
import Dropdown from './components/Dropdown/Dropdown';
import './App.css';

const items = ['Account Settings', 'Profile Information', 'Change Password', 'Become PRO', 'Help', 'Log Out'];

export default function App() {
  const [selectedOption, toggleOption] = useState(null);
  const onSelect = (option) => {
    toggleOption(option);
  };

  return (
    <div className="App">
      <div className="container">
        <Dropdown items={items} selectedOption={selectedOption} onSelect={onSelect}/>
      </div>
    </div>
  );
}
