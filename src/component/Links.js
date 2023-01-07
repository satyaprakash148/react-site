import React from 'react'

export default function Links() {
  return (
    <div>
      <section className="message py-5">
      <div className="container text-center">
        <h1>Importants Links</h1>
        <div className="container">
          <div className="row">
            <div className="social_media_icon">
              <a className="btn" href="https://www.instagram.com" target="_blank">
                <i className="fab fa-instagram" style={{"fontSize":"50px"}}></i>
              </a>
              <a className="btn" href="https://www.linkedin.com" target="_blank">
                <i className="fab fa-linkedin" aria-hidden="true" style={{"fontSize":"50px"}}></i>
              </a>
              <a className="btn" href="https://github.com" target="_blank">
                <i className="fab fa-github" style={{"fontSize":"50px"}}></i>
              </a>
              <a className="btn" href="mailto:example@gmail.com" target="_blank">
                <i className="fab fa-google" style={{"fontSize":"50px"}}></i>
              </a>
            </div>
           
          </div>
        </div>
        <button className="btn btn-primary">Thanks</button>
      </div>
    </section>
    </div>
  )
}
