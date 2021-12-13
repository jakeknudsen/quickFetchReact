import logo from './welcome-16.gif';
import Axios from 'axios'
import './App.css';
import ReadData from './ReadData'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="logo" alt="logo" />
       <ReadData />
      </header>
    </div>
  );
}

export default App;
