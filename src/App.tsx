import React, { useState } from 'react'
import './App.css'
import Home from './pages/home'
import TodoPanel from './pages/todoPanel/todoPanel'
import { useIsFetching } from 'react-query'
import TodoPanelQuery from './pages/todoPanelQuery/todoPanelQuery'

function App () {
  const [showReduxDemo, setShowReduxDemo] = useState(false)
  const [showReactQueryDemo, setShowReactQueryDemo] = useState(false)
  const isFetching = useIsFetching()
  const handleReduxLinkClick = () => {
    setShowReduxDemo(true)
  }

  const handleReactQueryLinkClick = () => {
    setShowReactQueryDemo(true)
  }

  return (
    <div className="App">
       {!!isFetching && <div className="fullScreenLoading">full screen loading</div>}
      {!showReduxDemo && !showReactQueryDemo &&
        <Home
          onReduxDemoClick={handleReduxLinkClick}
          onReactQueryDemoClick={handleReactQueryLinkClick}
        />}
      {showReduxDemo && <TodoPanel/>}
      {showReactQueryDemo && <TodoPanelQuery/>}
    </div>
  )
}

export default App
