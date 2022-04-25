import React from "react"

const Footer = ({ author }) => {
  return (
    <footer>
      <div className="container footer-content">
        <div>
          <p>
            Created by {author} © {new Date().getFullYear()}
          </p>
        </div>
        <div className="social">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/r_eginaf"
          >
            <i className="bi bi-twitter"></i>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/githubregina"
          >
            <i className="bi bi-github"></i>
          </a>

          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/regina-jy-feng"
          >
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
