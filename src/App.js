import logo from './logo.svg';
import './App.css';

// Source: https://www.youtube.com/watch?v=a_7Z7C_JCyo

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Soul Happy Hour
        </a>
      </header>
    </div>
  );
}

export default App;
