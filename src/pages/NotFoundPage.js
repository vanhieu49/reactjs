import React, { Component } from 'react'

class NotFoundPage extends Component {
    render() {
        return (
            <div className="bg-faded p-4 my-4">
                <hr className="divider" />
                <h2 className="text-center text-lg text-uppercase my-0"><strong>Page Not Found</strong></h2>
                <hr className="divider" />
                <p className="text-center">
                <img src="img/404.jpg" alt="hinh anh" />
                </p>
            </div>
        )
    }
}
export default NotFoundPage