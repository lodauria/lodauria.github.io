import React from "react";
import { Sidenav, Nav } from "rsuite";

const SidenavInstance = ({ activeMenu }) => {

    return (
        <Sidenav>
            <Sidenav.Header>
                Browse contents
            </Sidenav.Header>
            <Sidenav.Body>
                <Nav activeKey={{activeMenu}}>
                    <Nav.Item eventKey="0" href="/"> Home </Nav.Item>
                    <Nav.Item eventKey="1" href="/pages/AudioSpeedUp"> Audio Speed Up </Nav.Item>
                </Nav>
            </Sidenav.Body>
        </Sidenav>
    )

}

export default SidenavInstance;