import React from 'react'
import Link from 'gatsby-link'

import Me from '../components/me';

const IndexPage = ({data}) => (
  <div>
    <Me
      name={data.site.siteMetadata.name}
      bio={data.site.siteMetadata.bio}
      rrss={data.site.siteMetadata.rrss}
    />
    <section className="blog container has-text-centered">
      {data.allMarkdownRemark.edges.map(post => (
        <Link
          key={post.node.id}
          to={post.node.frontmatter.path}>
          <article>
            <h1>{post.node.frontmatter.title}</h1>
            <p>{post.node.frontmatter.description}</p>
          </article>
        </Link>
      ))}
    </section>
  </div>
)

export const pageQuery = graphql `
  query IndexQuery {
    site {
      siteMetadata {
        name
        bio
        rrss {
          twitter
          linkedin
          instagram
        }
      }
    }
    allMarkdownRemark(
      limit: 10
      sort: { fields: [frontmatter___date], order: DESC}
      filter: {frontmatter: {published: {eq: true}}}) {
      edges {
        node {
          id
          frontmatter {
            title
            path
            description
            date
          }
        }
      }
    }
  }
`

export default IndexPage


