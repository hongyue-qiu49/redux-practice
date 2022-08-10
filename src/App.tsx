import React, {useState} from 'react';
import './App.css';
import Home from "./pages/home";
import TodoPanel from "./pages/todoPanel/todoPanel";
import {useIsFetching} from "react-query";

function App() {
  const [showReduxDemo, setShowReduxDemo] = useState(false)
  const isFetching = useIsFetching()
  const handleReduxLinkClick = () => {
    setShowReduxDemo(true)
  }

  return (
    <div className="App">
      {!!isFetching && <div>full screen loading</div>}
      {!showReduxDemo && !isFetching && <Home onReduxDemoClick={handleReduxLinkClick}/>}
      {showReduxDemo && !isFetching && <TodoPanel/>}
    </div>
  );
}

export default App;
