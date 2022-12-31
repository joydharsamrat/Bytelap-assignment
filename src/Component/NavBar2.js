import React from 'react';
import { Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Nav2.css'

const NavBar2 = () => {
    return (
        <Navbar className='my-3 ps-2 pe-3 py-3 nav2'>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-between gap-5 navItems">
                <NavDropdown title="Dropdown" className='after-none'>
                    <NavDropdown.Item className='text-center' href="#action/3.1"><Form.Check label="option 1" /></NavDropdown.Item>
                    <NavDropdown.Item className='text-center' href="#action/3.1"><Form.Check label="option 2" /></NavDropdown.Item>
                    <NavDropdown.Item className='text-center' href="#action/3.1"><Form.Check label="option 3" /></NavDropdown.Item>
                </NavDropdown>
                <Nav.Link className='d-flex gap-1' href="#home"><span>Filter </span><span>1</span></Nav.Link>
                <Nav.Link className='d-flex gap-1' href="#home"><span>Filter </span><span>2</span></Nav.Link>
                <Nav.Link className='d-flex gap-1' href="#home"><span>Filter </span><span>3</span></Nav.Link>
                <NavDropdown title="Dropdown" className='after-none dropdown'>
                    <NavDropdown.Item className='text-center' href="#action/3.1"><Form.Check label="option 1" /></NavDropdown.Item>
                    <NavDropdown.Item className='text-center' href="#action/3.1"><Form.Check label="option 2" /></NavDropdown.Item>
                    <NavDropdown.Item className='text-center' href="#action/3.1"><Form.Check label="option 3" /></NavDropdown.Item>
                </NavDropdown>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar2;