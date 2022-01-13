import * as React from "react"

import Layout from "../components/layout"
import FASTA from "../components/fasta"
import FASTQLevels from "../components/fastq"

const IndexPage = () => (
  <Layout>
    <FASTA />
    <FASTQLevels />
  </Layout>
)

export default IndexPage
