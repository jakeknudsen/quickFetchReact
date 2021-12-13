// import logo from './logo.svg';
import Axios from 'axios'
import './App.css';
import ReadData from './ReadData'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
       <ReadData />
      </header>
    </div>
  );
}

export default App;
