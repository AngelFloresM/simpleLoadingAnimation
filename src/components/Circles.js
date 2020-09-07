import React from "react"
import { motion } from "framer-motion"

import "./Circles.css"

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

export default function Circles() {
  return (
    <motion.div className="Circles">
      {[1, 2, 3].map((_, i) => (
        <motion.span key={i} className="some" variants={spanVariants} />
      ))}
    </motion.div>
  )
}
