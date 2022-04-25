import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"

const Cert = () => {
  return (
    <Layout>
      <Head title="Certificate" />
      <div className="certificate-section py-5">
        <h2 className="section-title">Certification</h2>
        <div class="bottom-line"></div>
        <div className="container">
          <div className="list-group">
            <a
              href="https://www.udemy.com/certificate/UC-f7ca6a89-6a67-4487-9ccf-63fe58dc5f38/"
              target="_blank"
              rel="noreferrer"
              className="list-group-item list-group-item-action"
              aria-current="true"
            >
              <div className="d-flex justify-content-between">
                <h5 className="mb-1">Project Management Essential Certified</h5>
                <small className="text-muted">2022</small>
              </div>
              <p className="mb-1">Management and Strategy Institute</p>
              <small className="text-muted">Online</small>
            </a>
            <a
              href="https://www.udemy.com/certificate/UC-f7ca6a89-6a67-4487-9ccf-63fe58dc5f38/"
              target="_blank"
              rel="noreferrer"
              className="list-group-item list-group-item-action"
              aria-current="true"
            >
              <div className="d-flex justify-content-between">
                <h5 className="mb-1">
                  The Complete 2022 Web Development Bootcamp
                </h5>
                <small className="text-muted">2022</small>
              </div>
              <p className="mb-1">
                HTML/ CSS/ Javascript/ DOM/ Node.js/ Express.js/ APIs/ EJS/ SQL/
                MongoDB/ React.js
              </p>
              <small className="text-muted">Online</small>
            </a>
            <a
              href="https://www.sja.org.uk/"
              target="_blank"
              rel="noreferrer"
              className="list-group-item list-group-item-action"
              aria-current="true"
            >
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">First Aid at Work</h5>
                <small className="text-muted">2022</small>
              </div>
              <p className="mb-1">St. John Ambulance</p>
              <small className="text-muted">London, UK</small>
            </a>
            <a
              href="https://techlabs.london/"
              target="_blank"
              rel="noreferrer"
              className="list-group-item list-group-item-action"
            >
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">Web Development - Techie | London</h5>
                <small className="text-muted">2022</small>
              </div>
              <p className="mb-1">TechLabs Digital Shaper Program</p>
              <small className="text-muted">Online</small>
            </a>
            <a
              href="#!"
              rel="noreferrer"
              className="list-group-item list-group-item-action"
            >
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">Full UK driving license</h5>
                <small className="text-muted">2018</small>
              </div>
            </a>
            <a
              href="https://www.ielts.org/"
              target="_blank"
              rel="noreferrer"
              className="list-group-item list-group-item-action"
            >
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">Academic overall band score 6.5</h5>
                <small className="text-muted">2014</small>
              </div>
              <p className="mb-1">
                International English Language Testing System (IELTS)
              </p>
              <small className="text-muted">London, UK</small>
            </a>
            <a
              href="https://www.pmi.org/"
              target="_blank"
              rel="noreferrer"
              className="list-group-item list-group-item-action"
            >
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">
                  Project Management Professional (PMP) Training course
                </h5>
                <small className="text-muted">2013</small>
              </div>
              <p className="mb-1">China Youth Service Association</p>
              <small className="text-muted">Taiwan</small>
            </a>
            <a
              href="https://www.redcross.org.tw/english/index.jsp"
              target="_blank"
              rel="noreferrer"
              className="list-group-item list-group-item-action"
            >
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">Life Guard Training</h5>
                <small className="text-muted">2004</small>
              </div>
              <p className="mb-1">The Taiwan Red Cross</p>
              <small className="text-muted">Taiwan</small>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Cert
