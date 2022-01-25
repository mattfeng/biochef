import React, { useState } from "react"
import Tool from "./tool"

import * as styles from "../styles/length.module.scss"

const Length = () => {
  const [str, setStr] = useState("")

  const handleStrChange = event => {
    const newString = event.target.value
    setStr(newString)
  }

  return (
    <Tool>
      <h1>Length</h1>
      <textarea value={str} onChange={handleStrChange} />
      <p className={styles.output}>length: {str.length}</p>
    </Tool>
  )
}

export default Length
