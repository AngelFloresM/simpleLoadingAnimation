import React from "react"
import { motion } from "framer-motion"

import "./Circles.css"

const parent = {
  start: { rotate: "0deg" },
  on: {
    rotate: "270deg",
    transition: {
      duration: 1,
      yoyo: Infinity,
      type: "tween"
    }
  }
}

export default function Circles() {
  return (
    <motion.div
      className="Circles"
      initial="start"
      animate="on"
      exit="exit"
      variants={parent}
    >
      {[1, 2, 3].map((_, i) => (
        <motion.span key={i} className="child" />
      ))}
    </motion.div>
  )
}
