import logo from './logo.svg';
import maintainances from './under-maintainance-2.gif';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={maintainances}  alt="logo" />
        <p>
          The website is under construction. Will Come Soon 😊
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
