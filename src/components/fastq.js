import React from "react"

import * as styles from "../styles/fastq.module.scss"

const _ = require("lodash")

const FASTQLevels = () => {
  const makeQscores = () => {
    const rows = []

    for (let Q of _.range(41)) {
      const pError = Math.pow(10, -Q / 10)
      let pErrorDisplay
      if (pError > 1 / 10) {
        pErrorDisplay = `1 / ${Math.round(10 / pError) / 10}`
      } else if (pError > 1 / 30) {
        pErrorDisplay = `1 / ${Math.round(1 / pError)}`
      } else if (pError > 1e-2) {
        pErrorDisplay = `1 / ${Math.round(1 / (pError * 5)) * 5}`
      } else if (pError > 1e-3) {
        pErrorDisplay = `1 / ${Math.round(1 / (pError * 25)) * 25}`
      } else {
        pErrorDisplay = `1 / ${Math.round(1 / (pError * 100)) * 100}`
      }
      const ascii = String.fromCharCode(Q + 33)
      rows.push(
        <tr>
          <td>{ascii}</td>
          <td>{Q}</td>
          <td>{pErrorDisplay}</td>
        </tr>
      )
    }

    return (
      <table>
        <thead>
          <tr>
            <th>Character</th>
            <th>Q Score</th>
            <th>P(Error)</th>
          </tr>
        </thead>
        {rows}
      </table>
    )
  }

  const Qscores = makeQscores()
  return (
    <div className={styles.container}>
      <h1>FASTQ Quality Table</h1>
      {Qscores}
    </div>
  )
}

export default FASTQLevels
