import React, { Component } from 'react'
import NewItem from '../components/NewItem'
import BlogItem from '../components/BlogItem'

class AboutPage extends Component {
    render() {
        return (
            <div>
                <NewItem />
                <BlogItem />
                <NewItem />
            </div>
        )
    }
}
export default AboutPage