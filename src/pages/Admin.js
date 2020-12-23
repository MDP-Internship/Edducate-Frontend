import React, { Component } from 'react'
import Header from '../components/Header'
import UserTables from '../components/UserTables'

export default class Admin extends Component {
    render() {
        return (
            <div>

                <UserTables></UserTables>
            </div>
        )
    }
}
