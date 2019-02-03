import React from 'react'

const Footer = ({ rrss }) => (
  <footer className="container">
    <p>Ender Bonnet</p>
    <div className="rrss">
      <a className="link" href={rrss.twitter}>
        <span className="icon">
          <i className="fab fa-twitter" />
        </span>
      </a>
      <a className="link" href={rrss.instagram}>
        <span className="icon">
          <i className="fab fa-instagram" />
        </span>
      </a>
      <a className="link" href={rrss.linkedin}>
        <span className="icon">
          <i className="fab fa-linkedin" />
        </span>
      </a>
    </div>
    <p>
      2019 todos los derechos reservados y los zurdos también. Construido con{' '}
      <a href="https://gatsbyjs.com">Gatsbyjs</a>
    </p>
  </footer>
)

export default Footer
