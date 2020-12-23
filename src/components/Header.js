import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    Container,
    Button
} from 'reactstrap';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createStructuredSelector } from 'reselect'
import PropTypes from "prop-types"

import { logOutUser } from "../store/actions"
import { selectLogin } from "../store/selectors"
import { isLoggedIn } from "../commons/utils"
import { Link, useHistory } from "react-router-dom";


class Header extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
            setIsOpen: false,
        }


    }

    componentDidUpdate() {
        // window.location.hash = this.isLogin(this.props.login)

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
                            {this.props.routes.map(({ path, title }) => (
                                <Link  key={path} className="w3-bar-item mx-3" to={`${this.props.prefix}${path}`}>
                                    {title}
                                </Link>
                            ))}
                            {isLoggedIn() && <Button onClick={this.handleLogout}>Logout</Button>}
                        </Nav>
                        {!this.props.login ?
                            <Link onClick={this.logOut} >Çıkış Yap</Link> :
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