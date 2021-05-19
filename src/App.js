import './App.css';
import Dropdown from './components/Dropdown/Dropdown';

export default function App() {
  const items = ['Profile Information', 'Change Password', 'Become PRO', 'Help', 'Log Out'];

  return (
    <div className="App">
      <div className="container">
        <Dropdown items={items}/>
      </div>
    </div>
  );
}
