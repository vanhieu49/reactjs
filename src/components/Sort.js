import React, { Component } from 'react';
import { connect } from 'react-redux'
import { actSort } from '../actions'


class Sort extends Component {
   
    handleOder = (orderBy,orderDir)=>{
        this.props.handleSort(orderBy,orderDir)
    }
    render() {
        let {orderBy,orderDir} = this.props.sort;
        let strOder = orderBy + "-" + orderDir.toLocaleUpperCase();
        return (
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <div className="dropdown"><button className="btn btn-default dropdown-toggle" 
                type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    Sort by
                <span className="caret" /></button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li><a onClick={ () => this.handleOder('Name','ASC')} role="button">Name ASC</a></li>
                        <li><a onClick={ ()=> this.handleOder('Name','DESC')} role="button">Name DESC</a></li>
                        <li role="separator" className="divider" />
                        <li><a onClick={ ()=>this.handleOder('Level','ASC')} role="button">Level ASC</a></li>
                        <li><a onClick={ ()=>this.handleOder('Level','DESC')} role="button">Level DESC</a></li>
                    </ul><span className="label label-success label-medium">{strOder}</span>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        sort:state.sort
    }
}
let mapDispatchToProps = (dispatch, ownProp) => {
    return {
        handleSort: (orderBy,orderDir) => {
            dispatch(actSort(orderBy,orderDir))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Sort);
