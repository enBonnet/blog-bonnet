import React from 'react';
import Link from 'gatsby-link';

const Header = ({ siteTitle }) => (
  <header>
    <section className="hero">
      <div className="hero-body">
        <div className="container level">
          <h1 className="title level-item level-left">
            <Link
              to="/"
            >
              {siteTitle}
            </Link>
          </h1>
        </div>
      </div>
    </section>
  </header>
);

export default Header;
