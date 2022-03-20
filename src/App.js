import logo from './logo.svg';
import './App.css';
import Device from './components/Device/Device';
import Devicedetails from './components/DeviceDetail/Devicedetails';
import Watch from './components/Watch/Watch';

function App() {
  return (
    <div className="App">
      <Device name="Realme" price="15000"></Device> 
      <Watch></Watch>
    </div>
  );
}

export default App;
