import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import ElandridTitle from '../images/elandrid-title.svg';

const IndexPage = () => (
  <Layout zenMode={false}>
  <header>
     <ElandridTitle />
  </header>
   <div className="page">
      <h2>Coming June 2019</h2>
   </div>
  </Layout>
)

export default IndexPage
