import React from "react";
import {useHistory} from 'react-router-dom'
import { useState } from "react";
import {ButtonGroup , DropdownButton , Nav, Dropdown } from 'react-bootstrap';

function Menu(props) {
  const [show, setShow] = useState(props.show);
  const history = useHistory();

  return (
    <div className="Nav">
      <div className="topnav">
        <ButtonGroup>
          <DropdownButton
            childBsPrefix={ButtonGroup}
            title="Our Service"
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
            show={show}
            onClick={() => {
              history.push("/OurService");
            }}
          >
            <Dropdown.Item href="/Service/Passport">Passport photo</Dropdown.Item>
            <Dropdown.Item href="#/Photo/Film">Photo/Film Processing</Dropdown.Item>
            <Dropdown.Item href="#/Photorestoration/PhotoEditing">Photo restoration/Photo Editing</Dropdown.Item>
            <Dropdown.Item href="#/Scanning/Digitisation">Scanning/Digitisation Service</Dropdown.Item>
            <Dropdown.Item href="#/Video/AudioConvert">Video/Audio Convert</Dropdown.Item>
            <Dropdown.Item href="#/Documentation/Translation">Documentation/Translation Service</Dropdown.Item>
            <Dropdown.Item href="#/Canvas/Frames/Accessories">Canvas/Frames/Accessories</Dropdown.Item>
            <Dropdown.Item href="#/KeyCutting">Key Cutting/Access Card</Dropdown.Item>
          </DropdownButton>

          <Nav.Link href="/Contact">Contact</Nav.Link>
          <Nav.Link href="/PhotoAssistance">PhotoAssistance</Nav.Link>
        </ButtonGroup>
      </div>
    </div>
  );
}

export default Menu;
