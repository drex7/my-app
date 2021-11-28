import logo from './logo.svg';
import './App.css';

function App() {
		const package = 'com.android.settings';
  return (
    <div className="App">
      <header className="App-header">
        <a href="intent://scan/#Intent;package=com.android.settings;end">Open Settings</a>
		  <p><a href={`intent:#Intent;action=BLUETOOTH_SETTINGS;package=${package};end`}>Bluetooth Settings</a>
		  </p>
		  <p><a href={`intent:#Intent;action=${package}.DISPLAY_SETTINGS;package=${package};end`}>DISPLAY SETTINGS</a>
		  </p>
		<p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
