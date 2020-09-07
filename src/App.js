import React from "react"
import { motion } from "framer-motion"

import UpDown from "./components/UpDown"
import "./App.css"

const divVariants = {
  start: { scale: 0 },
  on: {
    scale: 1,
    transition: {
      delay: 2,
      staggerChildren: 0.4
    }
  }
}

function App() {
  return (
    <motion.div
      className="App"
      initial="start"
      animate="on"
      variants={divVariants}
    >
      <UpDown />
    </motion.div>
  )
}

export default App
