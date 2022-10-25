import logo from './logo.svg';
import './App.css';
import Demo from "./components/Demo";
import DemoInline from "./components/DemoInline";
import DemoNormal from "./components/DemoNormal";
import DemoStyledComponent from "./components/DemoStyledComponent";

function App() {
    return (
        <div className="App">
            <Demo gender="m" other="str"/>
            <DemoInline active={true} backgroundColor="gray"/>
            <DemoNormal selected/>
            <DemoStyledComponent/>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
