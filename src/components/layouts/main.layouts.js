// child components
import React from "react"
import Navigation from "./navigation.layouts"
import { Alert } from "react-bootstrap"

const MainLayouts = () => {
  return (
    <React.Fragment>
      <Navigation />
      <Alert variant="primary" style={{ margin: "20px" }}>
        Welcome to Homepage
      </Alert>
      <Alert variant="info" style={{ margin: "20px" }}>
        In this course, we trying to show data from open source API. You can see
        the data in Albums or Posts Navigation. and using loading feature before
        the data show up, so the loading is more interactive.
      </Alert>
    </React.Fragment>
  )
}

export default MainLayouts
