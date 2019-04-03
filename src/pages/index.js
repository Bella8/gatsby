import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import StarWarIndex from '../components/star-war-index'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h3>Star War Character</h3>
    <StarWarIndex />
  </Layout>
)

export default IndexPage
