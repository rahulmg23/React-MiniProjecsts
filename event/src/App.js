import './App.css';
// import HandleClick from './HandleClick';
import Clicker from './ClickerMessage';

function App() {
  return (
    <div className="App">
      {/* <HandleClick/>  */}
      <Clicker message = "hi" buttonText= "click me"/>
      <Clicker message="plz do not click me" buttonText="dont click me"/>
    </div>
  );
}

export default App;
