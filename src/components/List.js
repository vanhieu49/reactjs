import React, { Component } from 'react';
import Item from './Item'
import { connect } from 'react-redux'
import { filter, includes, orderBy as funcOrderBy, } from 'lodash'

class List extends Component {

    render() {
        let { items, strSearch, sort, onClickEdit } = this.props;
        let { orderBy, orderDir } = sort;
        let origionItems = items ? [...items] : [];

        items = filter(origionItems, (item) => {
            return includes(item.name.toLowerCase(), strSearch.toLowerCase())
        })

        items = funcOrderBy(items, [orderBy.toLocaleLowerCase()], [orderDir.toLocaleLowerCase()])

        let elmItem = <tr><th colSpan={4}>Danh sách rỗng</th></tr>
        if (items.length) {
            elmItem = items.map((item, index) => {
                return (
                    <Item
                        onClickEdit={onClickEdit}
                        key={index}
                        item={item}
                        index={index}
                    />
                )
            })
        }

        return (
            <div className="panel panel-success">
                <div className="panel-heading">List Task</div>
                <table className="table table-hover ">
                    <thead>
                        <tr>
                            <th className="text-center" style={{ width: '10%' }}>#</th>
                            <th>Task</th>
                            <th className="text-center" style={{ width: '20%' }}>Level</th>
                            <th style={{ width: '20%' }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {elmItem}
                    </tbody>
                </table>
            </div>

        );
    }
}
const mapStateToProps = state => {
    return {
        items: state.items,
        strSearch: state.search,
        sort: state.sort
    }
}
export default connect(mapStateToProps, null)(List);
