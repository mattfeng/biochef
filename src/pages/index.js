import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import FASTA from "../components/fasta"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />

    <FASTA />
  </Layout>
)

export default IndexPage
