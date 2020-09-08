import React from "react"
import { motion } from "framer-motion"

import "./GrowShrink.css"

const parent = {
  start: {
    scale: 0,
    transition: {
      duration: 0.25
    }
  },
  on: {
    scale: 1,
    transition: {
      delay: 0.2,
      staggerChildren: 0.7
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
      exit="start"
      variants={parent}
    >
      {[1, 2, 3, 4].map((_, i) => (
        <motion.span
          key={i}
          className="some"
          animate={{ scale: [1, 1.5, 1] }}
          transition={{
            type: "spring",
            times: [0, 0.5, 1],
            repeat: Infinity,
            duration: 1.5,
            delay: i * 0.5,
            repeatDelay: 1
          }}
        />
      ))}
    </motion.div>
  )
}
