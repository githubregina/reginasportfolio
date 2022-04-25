import React from "react"
import Helmet from "react-helmet"

const Head = ({ title }) => {
  return (
    <>
      <Helmet
        defaultTitle="Default title | Regina's"
        title={title}
        titleTemplate="%s | Regina's"
      />
    </>
  )
}

export default Head
