import './App.css';
import CountView from './components/CountView/CountView';
import CountControl from './components/CountControl/CountControl';
import User from './components/user/Users';

function App() {
  return (
    <div className="App">
      <CountView />
      <CountControl/>
      <br/>
      <br/>
      <User />
    </div>
  );
}

export default App;
