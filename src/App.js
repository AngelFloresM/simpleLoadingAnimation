import React from "react"
import { motion } from "framer-motion"
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

const spanVariants = {
  start: { y: -5 },
  on: {
    y: 5,
    transition: {
      duration: 1,
      yoyo: Infinity,
      type: "tween"
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
      <motion.div className="motionDiv">
        {[1, 2, 3].map((_, i) => (
          <motion.span key={i} className="some" variants={spanVariants} />
        ))}
      </motion.div>
    </motion.div>
  )
}

export default App
