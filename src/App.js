import React from "react"
import { AnimatePresence } from "framer-motion"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import UpDown from "./components/UpDown"
import GrowShrink from "./components/GrowShrink"
import Circles from "./components/Circles"
import Header from "./components/Header"
import "./App.css"

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <AnimatePresence>
          <Switch>
            <Route path="/updown" component={UpDown} />
            <Route path="/growshrink" component={GrowShrink} />
            {/* <Route path="/circles" component={Circles} /> */}
          </Switch>
        </AnimatePresence>
      </Router>
    </div>
  )
}

export default App
