import React from "react"
import { AnimatePresence } from "framer-motion"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import UpDown from "./components/UpDown"
import GrowShrink from "./components/GrowShrink"
import Select from "./components/Select"
import Header from "./components/Header"
import "./App.css"

export function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route
          render={({ location }) => (
            <AnimatePresence exitBeforeEnter initial={false}>
              <Switch location={location} key={location.pathname}>
                <Route path="/updown" component={UpDown} />
                <Route path="/growshrink" component={GrowShrink} />
                <Route path="/" component={Select} />
              </Switch>
            </AnimatePresence>
          )}
        />
      </Router>
    </div>
  )
}
