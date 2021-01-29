import React, { Component } from 'react'

class BlogItem extends Component {
    render() {
        return (
            <div className="row">
                <div className="box">
                    <div className="col-lg-12">
                        <hr />
                        <h2 className="intro-text text-center">About <strong>business casual</strong>
                        </h2>
                        <hr />
                    </div>
                    <div className="col-md-6">
                        <img className="img-responsive img-border-left" src="img/slide-2.jpg" alt="hinh anh" />
                    </div>
                    <div className="col-md-6">
                        <p>This is a great place to introduce your company or project and describe what you do.</p>
                        <p>Lid est laborum dolo rumes fugats untras. Etharums ser quidem rerum facilis dolores nemis omnis fugats vitaes nemo minima rerums unsers sadips amets.</p>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                    </div>
                    <div className="clearfix" />
                </div>
            </div>

        );
    }
}


export default BlogItem;
