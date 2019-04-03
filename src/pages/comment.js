import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import CommentIndex from '../components/comment-index'

const Comment = () => (
  <Layout>
    <SEO title='Page two' />
    <CommentIndex/>
  </Layout>
)

export default Comment
