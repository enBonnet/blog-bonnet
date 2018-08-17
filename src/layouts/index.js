import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/header';
import Footer from '../components/footer';
//import bulma on scss
import './style.scss';

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Blog de Ender Bonnet, ven a leerme hablar sobre programación' },
        { name: 'keywords', content: 'programming, javascript, nodejs, react, vue, programacion, gatsbyjs' },
      ]}
    />
    <Header
      siteTitle={data.site.siteMetadata.title}
    />
    {children()}
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 10, sort:
      {fields: [frontmatter___date], order: DESC},
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
`;