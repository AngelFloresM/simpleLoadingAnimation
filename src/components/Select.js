import React from "react"
import { motion } from "framer-motion"

const parent = {
  on: { scale: 1 },
  exit: { scale: 0 }
}

export default function Select() {
  return (
    <motion.div
      className="Select"
      animate="on"
      exit="exit"
      variants={parent}
      transition={{ type: "tween", duration: 0.25 }}
    >
      <h2>Select an Animation</h2>
    </motion.div>
  )
}
