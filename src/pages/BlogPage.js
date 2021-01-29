import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from "react-router-dom";
import NewItem from '../components/NewItem'
import BlogItem from '../components/BlogItem'


class BlogPage extends Component {
    render() {
        let { user } = this.props;
        if (!user.isLogin) {
            return <Redirect to='/login' />
        }
        return (
            <div>
                <BlogItem />
                <NewItem />
                <BlogItem />
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps, null)(BlogPage)