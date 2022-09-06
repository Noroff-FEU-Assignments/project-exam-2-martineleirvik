<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="/">HOLIDAZE</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/booking">Booking</Nav.Link>
        <Nav.Link href="/contact">Contact us</Nav.Link>

        {auth ? (
          <>
            <NavDropdown title="Admin" id="basic-nav-dropdown">
              <NavDropdown.Item href="/listenquiry">Enquries</NavDropdown.Item>
              <NavDropdown.Item href="/listmessage">Messages</NavDropdown.Item>
              <NavDropdown.Item href="newestablishment">
                New establishment
              </NavDropdown.Item>
            </NavDropdown>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <Nav.Link href="/login">Login</Nav.Link>
        )}
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>;
