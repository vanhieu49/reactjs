import React, { Component } from 'react'
import { connect } from 'react-redux'
import FormLogin from '../components/FormLogin'
import UserControl from '../components/UserControl'


class LoginPage extends Component {
    showUser = (user) => {
        if (!user.isLogin) {
            return <FormLogin />
        } else {
            return <UserControl username={user.username}/>
        }
    }
    render() {
        let { user } = this.props;
        return (
            <div>
                {this.showUser(user)}
            </div>
        )
    }
}
let mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps, null)(LoginPage)