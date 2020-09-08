import React from "react"
import { motion } from "framer-motion"

import "./UpDown.css"

const variants = {
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
      when: "beforeChildren"
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
      exit="start"
      variants={variants}
    >
      {[1, 2, 3].map((_, i) => (
        <motion.span
          key={i}
          className="some"
          animate={{ y: [-10, 10, -10] }}
          transition={{
            delay: i * 0.5,
            duration: 2,
            times: [0, 0.5, 1],
            repeat: Infinity
          }}
        />
      ))}
    </motion.div>
  )
}
