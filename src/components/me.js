import React from 'react'

const Me = ({ name, bio, rrss }) => (
  <section className="me container">
    <div>
      <div>
        <h1 className="name">{name}</h1>
      </div>
      <div className="info">
        <div className="bio">
          <p>{bio}</p>
        </div>
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
      </div>
    </div>
  </section>
)

export default Me
