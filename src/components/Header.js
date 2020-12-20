import React, { useState, Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';


class Header extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
            setIsOpen: false
        }
    }

    toggle = () => this.setState({ isOpen: !this.state.isOpen })

    render() {
        return (
            <Navbar color="light" light expand="md">
                <Container>
                    <NavbarBrand href="/">Edducate</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink href="/components/">Anasayfa</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/components/">Admin</NavLink>
                            </NavItem>
                        </Nav>
                        <NavLink href="/components/">Login</NavLink>
                    </Collapse>
                </Container>
            </Navbar>
        )
    }
}


export default Header;