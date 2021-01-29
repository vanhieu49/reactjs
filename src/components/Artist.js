import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Artist extends Component {
    showItem = (item) => {
        let xhtml = null;
        if (item.images !== null && item.images.length > 1) {
            xhtml = <img src={item.images[1].url} alt={item.name} />
        }
        return xhtml
    }
    showGenres = (item) => {
        let xhtml = null;
        if (item !== null && item.length > 0) {
            xhtml = item.map((genres, index) => {
                return <span key={index} className="label label-warning" style={{ marginRight: 5 }}>{genres}</span>
            })
        }
        return xhtml;
    }
    render() {
        // let {item} = this.props;
        let item = {
            id: '',
            name: '',
            genres: [],
            images: [{ url: '' }, { url: '' }]
        }
        item = this.props.item !== null ? this.props.item : item
        return (
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <div className="thumbnail">
                    {this.showItem(item)}
                    <div className="caption">
                        <h3><Link to={`artist/${item.id}`}>{item.name}</Link></h3>
                        <p>{this.showGenres(item.genres)}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Artist;
