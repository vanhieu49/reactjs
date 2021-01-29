import React, { Component } from 'react'
import Sidebar from '../components/Sidebar'
import NewItem from '../components/NewItem'

class HomePage extends Component {
    render() {
        return (
            <div>
                <Sidebar />
                <NewItem />
            </div>
        )
    }
}
export default HomePage