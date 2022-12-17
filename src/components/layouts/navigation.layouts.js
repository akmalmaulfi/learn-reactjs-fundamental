import { Container, Nav, Navbar } from "react-bootstrap"

const Navigation = ({ albumActive, postsActive }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">AKMALGANTENG</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/albums" className={albumActive}>
              ALBUMS
            </Nav.Link>
            <Nav.Link href="/posts" className={postsActive}>
              POSTS
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation
