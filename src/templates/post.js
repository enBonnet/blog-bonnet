import React from 'react';
import Helmet from 'react-helmet';

import Me from '../components/me';

export default function Template({data}) {
  const post = data.markdownRemark;
  return (
    <div className="me container">
      <h1 className="name">{post.frontmatter.title}</h1>
      <article className="post">
        <div dangerouslySetInnerHTML = {{__html: post.html}} />
      </article>
    </div>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path} }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`