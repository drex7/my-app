import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href="intent://scan/#Intent;scheme=zxing;package=com.google.zxing.client.android;end">Open Settings</a>
		<p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
