// child components
import React from "react"
import { Container } from "react-bootstrap"
import Collection from "./collection.albums"
import Navigation from "../layouts/navigation.layouts"

const MainAlbums = ({ albumActive }) => {
  return (
    <React.Fragment>
      <Navigation albumActive={albumActive} />
      <Container className="mt-2">
        <Collection />
      </Container>
    </React.Fragment>
  )
}

export default MainAlbums
