import React, { useState } from "react"
import Tool from "./tool"

import * as styles from "../styles/dna-rna.module.scss"

const DNAtoRNAConverter = () => {
  const [rna, setRNA] = useState("")
  const [dna, setDNA] = useState("")

  const handleRNAChange = event => {
    const value = event.target.value
    let result = value.replaceAll("u", "t").replaceAll("U", "T")
    setRNA(value)
    setDNA(result)
  }

  const handleDNAChange = event => {
    const value = event.target.value
    let result = value.replaceAll("t", "u").replaceAll("T", "U")
    setDNA(value)
    setRNA(result)
  }

  return (
    <Tool>
      <h1>DNA/RNA interconverter</h1>
      <h2>DNA</h2>
      <textarea
        className={styles.textarea}
        value={dna}
        onChange={handleDNAChange}
      />
      <h2>RNA</h2>
      <textarea
        className={styles.textarea}
        value={rna}
        onChange={handleRNAChange}
      />
    </Tool>
  )
}

export default DNAtoRNAConverter
