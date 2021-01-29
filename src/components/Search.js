import React, { Component } from 'react';
import { connect } from 'react-redux'
import { actSearch } from '../actions'

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            strSearch: ''
        }
    }
    handleSearch = () => {
        this.props.goSearch(this.state.strSearch)
    }
    handleClear = () => {
        this.setState({
            strSearch:''
        })
        this.props.clearSearch(this.state.strSearch)
    }
    handleOnchange = (event) => {
        this.setState({
            strSearch: event.target.value
        })
    }
    render() {
        return (
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="input-group">
                    <input
                        value={this.state.strSearch?this.state.strSearch:this.props.strSearch}
                        onChange={this.handleOnchange}
                        type="text" className="form-control" refs="search" placeholder="Search for..." />
                    <span className="input-group-btn">
                        <button
                            onClick={this.handleSearch}
                            className="btn btn-info" type="button">Go!</button>
                        <button
                            onClick={this.handleClear}
                            className="btn btn-warning" type="button">Clear</button>
                    </span>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        strSearch: state.search
    }
}
let mapDispatchToProps = (dispatch, ownProp) => {
    return {
        goSearch: (strSearch) => {
            dispatch(actSearch(strSearch))
        },
        clearSearch: () => {
            dispatch(actSearch(''))
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Search);