import React from "react"

import * as styles from "../styles/tool.module.scss"

const Tool = ({ children }) => {
  return <div className={styles.container}>{children}</div>
}

export default Tool
