import React, { useState } from 'react';
import { CloseButton, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { HiMenu } from "react-icons/hi";

const NavBar = () => {
    const [open, setOpen] = useState(false)

    const handelOpen = () => {
        setOpen(!open)
    }
    return (
        <Navbar expand="lg" className='my-5'>
            <Container className='justify-content-end'>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handelOpen}>
                    {
                        open ? <CloseButton /> : <HiMenu></HiMenu>
                    }
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end gap-5'>

                    <Nav.Link href="#home">Home</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1" className='text-center'>Option 1</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.1" className='text-center'>Option 2</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.1" className='text-center'>Option 3</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#home">Logout</Nav.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;