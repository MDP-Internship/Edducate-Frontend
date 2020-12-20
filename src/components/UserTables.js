import React, { Component } from 'react'
import { Table } from 'reactstrap';
import { connect } from 'react-redux'
import { selectUsers } from "../store/selectors"
import { getAllUser } from "../store/actions"
import { bindActionCreators } from 'redux'
import { createStructuredSelector } from 'reselect'

// import PropTypes from 'prop-types'


class UserTables extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {

        this.props.getAllUser();
    }

    render() {
        const users = this.props.users;

        return (
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Surname</th>
                        <th>Mail</th>
                        <th>RolId</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user =>
                            <tr>
                                <th scope="row">{user.id}</th>
                                <td>{user.name}</td>
                                <td>{user.surname}</td>
                                <td>{user.email}</td>
                                <td>{user.roleId}</td>
                            </tr>)
                    }

                </tbody>
            </Table>

        )
    }
}


const mapStateToProps = () => createStructuredSelector(
    {
        users: selectUsers()
    }
);

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getAllUser
}, dispatch)

// Table.PropTypes = {
//     selectUsers: PropTypes.object.isRequired
// }
export default connect(mapStateToProps, mapDispatchToProps)(UserTables)