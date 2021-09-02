import React from "react";
import { Nav, Navbar, NavDropdown, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../HeadingResponsive.css";

function HeadingResponsive() {

    return (
        <>
            <Navbar collapseOnSelect expand="md" className="header">
                <Nav.Link href="/">
                    <Image src="/service_icon/PhotoImageLogo.svg" alt="Order Online!" className="logo" />
                </Nav.Link>
                <Navbar.Toggle className="ml-auto" aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <NavDropdown className="ml-auto" title="Our Services" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/OurService">Our Service</NavDropdown.Item>  
                        <NavDropdown.Item href="/Service/Passport">Passport photo</NavDropdown.Item>
                        <NavDropdown.Item href="#/Service/Photo/Film">Photo/Film Processing</NavDropdown.Item>
                        <NavDropdown.Item href="#/Service/Restoration/Editing">Photo restoration/Photo Editing</NavDropdown.Item>
                        <NavDropdown.Item href="#/Service/Scanning/Digitisation">Scanning/Digitisation Service</NavDropdown.Item>
                        <NavDropdown.Item href="#/Service/Video/AudioConvert">Video/Audio Convert</NavDropdown.Item>
                        <NavDropdown.Item href="#/Service/Documentation/Translation">Documentation/Translation Service</NavDropdown.Item>
                        <NavDropdown.Item href="#/Service/Canvas/Frames/Accessories">Canvas/Frames/Accessories</NavDropdown.Item>
                        <NavDropdown.Item href="#/Service/KeyCutting">Key Cutting/Access Card</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/Contact">Contact</Nav.Link>
                    <Nav.Link href="/PhotoAssistance">Photo Assistance</Nav.Link>
                    <Nav.Link href="/orderOnline" className="onlinelogo">
                        <Image src="/service_icon/OrderOnline.svg" alt="Order Online!" className="hide-xs" />
                        <span className="hide-l show-xs">Order Online</span>
                    </Nav.Link>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default HeadingResponsive;
