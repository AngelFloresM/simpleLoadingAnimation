import React from "react"
import { motion } from "framer-motion"

import "./UpDown.css"

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
      staggerChildren: 0.4,
      when: "beforeChildren"
    }
  },
  exit: {
    scale: 0,
    transition: {
      duration: 0.25
    }
  }
}

const child = {
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
    <motion.div
      key="UpDown"
      className="UpDown"
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
