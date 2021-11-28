import logo from './logo.svg';
import './App.css';

function App() {
		const pkg = 'com.android.settings';
  return (
    <div className="App">
      <header className="App-header">
        <a href="intent://scan/#Intent;package=com.android.settings;end">Open Settings</a>
		  <p><a href={`intent:#Intent;action=BLUETOOTH_SETTINGS;package=${pkg};end`}>Bluetooth Settings</a>
		  </p>
		  <p><a href={`intent:#Intent;action=${pkg}.DISPLAY_SETTINGS;package=${pkg};end`}>DISPLAY SETTINGS</a>
		  </p>
		<p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
