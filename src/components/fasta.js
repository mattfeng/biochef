import React, { Component } from "react"

class FASTA extends Component {
  constructor(props) {
    super(props)

    this.name = "FASTA to plain string"
    this.state = {
      fasta: "",
      output: "",
    }
  }

  computeOutput = fasta => {
    fasta = fasta.replace(/[\r]/gm, "")
    let lines = fasta.split("\n")

    if (lines.length == 0) {
      return ""
    }

    if (lines[0].startsWith(">")) {
      return lines.slice(1).join("")
    }

    return lines.join("")
  }

  handleFastaChange = event => {
    const value = event.target.value

    const output = this.computeOutput(value)

    this.setState({ ...this.state, fasta: value, output })
  }

  render() {
    const { fasta, output } = this.state

    return (
      <div>
        <h1>{this.name}</h1>

        <h2>input</h2>
        <textarea
          cols="80"
          rows="15"
          name="fasta"
          value={fasta}
          onChange={this.handleFastaChange}
        ></textarea>

        <h2>output</h2>
        <textarea cols="80" rows="15" name="output" value={output}></textarea>
      </div>
    )
  }
}

export default FASTA
