import React from "react";
import { Button, Container, Row, Col } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { selectLogin } from '../store/selectors';
import { doLogin, forgotPassword, changePassword } from '../store/actions';

//????
import PropTypes from 'prop-types';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            email: '',
            password: '',
            changePass: '',
            changePassRepeat: '',
        };
        this.getChangePasswordToken();
    }


    getChangePasswordToken = () => {
        let token = '';
        if (window.location.href.includes('?')) {
            token = window.location.href.substring(
                window.location.href.lastIndexOf('?') + 1,
                window.location.href.lastIndexOf('#'),
            );
        }
        return token;
    }

    doLogin = () => {
        this.props.doLogin(this.state.email, this.state.password)
    }

    handleValidSubmit = (event, values) => {
        this.setState({ email: values.email });
        console.log(`Login Successful`);
    };

    handleInvalidSubmit = (event, errors, values) => {
        this.setState({ email: values.email, error: true });
        console.log(`Login failed`);
    };

    render() {
        return (
            <Container className="">
                <Row className="">
                    <Col md="6" className="mx-auto bg-white shadow-lg p-3 mt-5 bg-white rounded">
                        <h3>Login</h3>
                        <AvForm
                            onValidSubmit={this.handleValidSubmit}
                            onInvalidSubmit={this.handleInvalidSubmit}
                        >
                            <AvField
                                name="email"
                                value={this.state.email}
                                label="Email"
                                onChange={(e) => this.setState({ email: e.target.value })}
                                type="text"
                                validate={{
                                    required: true,
                                    email: true
                                }}
                            />
                            <AvField
                                name="password"
                                label="Password"
                                type="password"
                                onChange={(e) => this.setState({ password: e.target.value })}
                                value={this.state.password}
                                validate={{
                                    required: {
                                        value: true,
                                        errorMessage: "Please enter your password"
                                    },
                                    pattern: {
                                        value: "^[A-Za-z0-9]+$",
                                        errorMessage:
                                            "Your password must be composed only with letter and numbers"
                                    },
                                    minLength: {
                                        value: 6,
                                        errorMessage: "Your password must be between 6 and 16 characters"
                                    },
                                    maxLength: {
                                        value: 16,
                                        errorMessage: "Your password must be between 6 and 16 characters"
                                    }
                                }}
                            />
                            <Button id="submit" onClick={() => this.doLogin()}>Submit</Button>
                        </AvForm>
                    </Col>
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    loginState: selectLogin()
})

const mapDispatchToProps = dispatch => (
    (
      bindActionCreators({
        doLogin,
        // closeToast,
        // setMenuVisible,
      }, dispatch)
    )
  );
//???
Login.propTypes = {
    loginState: PropTypes.bool.isRequired,
    doLogin: PropTypes.func.isRequired,
    forgotPassword: PropTypes.func.isRequired,
    changePassword: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login)