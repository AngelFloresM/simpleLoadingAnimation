import React from "react"
import { motion } from "framer-motion"

import "./UpDown.css"

const Variants = {
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

export default function UpDown() {
  return (
    <motion.div className="UpDown">
      {[1, 2, 3].map((_, i) => (
        <motion.span key={i} className="some" variants={Variants} />
      ))}
    </motion.div>
  )
}
