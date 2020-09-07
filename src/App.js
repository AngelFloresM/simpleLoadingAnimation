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
  start: { y: 0 },
  on: {
    y: 20,
    transition: {
      duration: 1,
      yoyo: Infinity,
      type: "tween"
    }
  }
}

function Span() {
  return <motion.span className="some" variants={spanVariants} />
}

function App() {
  return (
    <div className="App">
      <motion.div
        className="motionDiv"
        initial="start"
        animate="on"
        variants={divVariants}
      >
        {[1, 2, 3].map((_, i) => (
          <Span key={i} />
        ))}
      </motion.div>
    </div>
  )
}

export default App
