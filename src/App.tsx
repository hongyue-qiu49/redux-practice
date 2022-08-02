import React, {useState} from 'react';
import './App.css';
import Home from "./pages/home";
import TodoPanel from "./pages/todoPanel/todoPanel";

function App() {
  const [showReduxDemo, setShowReduxDemo] = useState(false)
  const handleReduxLinkClick = () => {
    setShowReduxDemo(true)
  }

  return (
    <div className="App">
      {!showReduxDemo && <Home onReduxDemoClick={handleReduxLinkClick}/>}
      {showReduxDemo && <TodoPanel/>}
    </div>
  );
}

export default App;
