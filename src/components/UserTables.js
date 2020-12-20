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

        console.log(this.props.users);
        return (
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                    </tr>
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