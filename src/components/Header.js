import React, { Component } from 'react';
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
import { Link } from "react-router-dom"

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createStructuredSelector } from 'reselect'
import PropTypes from "prop-types"

import { logOutUser } from "../store/actions"
import { selectLogin } from "../store/selectors"

class Header extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
            setIsOpen: false
        }
    }

    componentDidUpdate() {
        window.location.hash = this.isLogin(this.props.login)
    }

    isLogin = (isLoginBool) => (isLoginBool ? "Login" : "");

    toggle = () => this.setState({ isOpen: !this.state.isOpen })

    logOut = () => this.props.logOutUser()

    loginButton = () => false

    render() {
        return (
            <Navbar color="light" light expand="md">
                <Container>
                    <NavbarBrand href="/">Edducate</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem className="mr-3">
                                <Link to="/">Anasayfa</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/Admin" >Admin</Link>
                            </NavItem>
                        </Nav>
                        {this.loginButton() ?
                            <NavLink onClick={this.logOut} >Çıkış Yap</NavLink> :
                            <Nav>
                                <Link className="mr-3" to="/Login">Giriş Yap</Link>
                                <Link to="/Register">Kayıt Ol</Link>
                            </Nav>
                        }
                    </Collapse>
                </Container>
            </Navbar>
        )
    }
}

const mapStateToProps = () => createStructuredSelector({
    login: selectLogin()
})


const mapDispatchToProps = dispatch => bindActionCreators({
    logOutUser
}, dispatch)

// Header.prototype = {
//     login: PropTypes.bool.isRequired,
//     logOutUser: PropTypes.func.isRequired
// }

export default connect(mapStateToProps, mapDispatchToProps)(Header);