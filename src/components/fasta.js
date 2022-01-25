import React, { Component } from "react"

import * as styles from "../styles/fasta.module.scss"
import Tool from "./tool"

class FASTA extends Component {
  constructor(props) {
    super(props)

    this.name = "FASTA to plain string"
    this.state = {
      fasta: "",
      outputs: [],
    }
  }

  computeOutputs = fasta => {
    const outputs = []
    fasta = fasta.replace(/[\r]/gm, "")
    let lines = fasta.split("\n")

    if (lines.length == 0) {
      return ""
    }

    let curFasta = ""
    let label = ""
    for (const line of lines) {
      if (line.startsWith(">")) {
        if (curFasta.length > 0) {
          outputs.push({ label, fasta: curFasta })
          curFasta = ""
        }
        label = line.substring(1)
      } else {
        curFasta += line
      }
    }
    if (curFasta.length > 0) {
      outputs.push({ label, fasta: curFasta })
    }

    return outputs
  }

  handleFastaChange = event => {
    const value = event.target.value

    const outputs = this.computeOutputs(value)

    this.setState({ ...this.state, fasta: value, outputs })
  }

  render() {
    const { fasta, outputs } = this.state

    return (
      <Tool>
        <h1>{this.name}</h1>

        <h2>FASTA format</h2>
        <textarea
          className={styles.textarea}
          name="fasta"
          value={fasta}
          onChange={this.handleFastaChange}
        ></textarea>

        <h2>Plain strings</h2>
        {outputs.map(({ label, fasta }) => (
          <div className={styles.output}>
            <h3>{label || "no fasta label"}</h3>
            <p>{fasta}</p>
            <p>length: {fasta.length}</p>
          </div>
        ))}
      </Tool>
    )
  }
}

export default FASTA
