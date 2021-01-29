import React, { Component } from 'react'
import { connect } from 'react-redux'
import Artist from './Artist'
import { getArtist } from '../services/SpotifyFetch'

class ArtistList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            artists: []
        }
    }
    searchArtis = (query) => {
        if (query !== '') {
            getArtist(query)
                .then(data => {
                    if (data !== undefined && data !== '') {
                        this.setState({
                            artists: [...data.artists.items]
                        })
                    }
                })
                .catch((error) => console.log(error.message))
        } else {
            this.setState({
                artists: []
            })
        }
    }
    componentDidUpdate(prevProps, prevState) { // trường hợp bấm input search props sẽ thay đổi render lại danh sách
        if (this.props.query.query !== prevProps.query.query) {
            this.searchArtis(this.props.query.query)
        }
    }
    componentDidMount() { // khi mới đầu vào nếu props có giá trị thì thay đổi.
        
        this.searchArtis(this.props.query.query)
    }
    render() {
        let { artists } = this.state
        let { query } = this.props;
        let xhtml = <h3>Enter artist's name to start</h3>;
        if (artists.length > 0) {
            xhtml = artists.map((item, index) => {
                return <Artist key={index} item={item} index={index} />
            })
        } else if (query.query !== '') {
            return xhtml = <h3>Không tìm thấy dữ liệu <strong>{query.query}</strong></h3>
        }
        return (
            <div className="panel-body">
                {xhtml}
            </div>

        );
    }
}

let mapStateToProps = (state) => {
    return {
        query: state
    }
}

export default connect(mapStateToProps, null)(ArtistList);
