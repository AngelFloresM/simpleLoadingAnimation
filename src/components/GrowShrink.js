import React from "react"
import { motion } from "framer-motion"

import "./GrowShrink.css"

const parent = {
  start: {
    scale: 0,
    transition: {
      duration: 0.5
    }
  },
  on: {
    scale: 1,
    transition: {
      delay: 0.2,
      staggerChildren: 0.7
    }
  },
  exit: {
    scale: 0
  }
}

const child = {
  start: { scale: 1 },
  on: {
    scale: 2,
    transition: {
      duration: 1,
      yoyo: Infinity,
      repeatDelay: 1,
      type: "tween"
    }
  }
}

export default function GrowShrink() {
  return (
    <motion.div
      key="GrowShrink"
      className="GrowShrink"
      initial="start"
      animate="on"
      exit="exit"
      variants={parent}
    >
      {[1, 2, 3].map((_, i) => (
        <motion.span key={i} className="some" variants={child} />
      ))}
    </motion.div>
  )
}
