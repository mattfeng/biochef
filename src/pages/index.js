import * as React from "react"

import Layout from "../components/layout"
import FASTA from "../components/fasta"
import FASTQLevels from "../components/fastq"
import DNAtoRNAConverter from "../components/dna-rna"

import "../styles/globals.scss"
import Length from "../components/length"

const IndexPage = () => (
  <Layout>
    <Length />
    <FASTA />
    <DNAtoRNAConverter />
    <FASTQLevels />
  </Layout>
)

export default IndexPage
