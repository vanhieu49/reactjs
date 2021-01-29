import React, { Component } from 'react';
import Title from './components/Title';
import Form from './components/Form'
import List from './components/List'
import Search from './components/Search'
import Sort from './components/Sort'
import ToggleFrom from './components/ToggleForm'
class App extends Component {
    render() {

        return (
            <div className="container" id="main-content">
                {/* title */}
                <Title />
                {/* control */}
                <div className="row">
                    {/* search */}
                    <Search />
                    {/* sort by */}
                    <Sort />
                    {/* form */}
                    <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                        <ToggleFrom />
                    </div>
                </div>

                {/* form */}
                <Form />

                {/* list */}
                <List />
            </div>

        );
    }
}

export default App;
