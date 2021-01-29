import React, { Component } from 'react'
import { connect } from 'react-redux'

import { actChangeQuery } from '../actions'

class FormSearch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            query: ''
        }
    }
    hanldeSearch = (e) => {
        let { query } = this.state;
        this.props.changeQuery(query)
        e.preventDefault();
    }
    hanldeClear = (e) => {
        this.props.changeQuery('')
        this.setState({
            query: ''
        })
        e.preventDefault();
    }
    handleChange = (e) => {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;
        this.setState({
            [name]: value
        })

    }
    handleKey = (e) => {
        if (e.key === 'Enter') {
            this.hanldeSearch(e)
        }
        
    }
    render() {
        let query = this.state.query !== '' ? this.state.query : this.props.query
        return (
            <div className="panel-heading">
                <form className="form-inline">
                    <div className="form-group">
                        <input
                            name="query" value={query}
                            onKeyPress={this.handleKey}
                            onChange={this.handleChange}
                            type="text" className="form-control" placeholder="Enter artist name ..." />
                        <button onClick={this.hanldeSearch} type="button" className="btn btn-danger">Search</button>
                        <button onClick={this.hanldeClear} type="button" className="btn btn-warning">Clear</button>
                    </div>
                </form>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        query: state.query
    }
}

let mapDispatchToProps = (dipatch, ownProps) => {
    return {
        changeQuery: (query) => {
            dipatch(actChangeQuery(query))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormSearch);
