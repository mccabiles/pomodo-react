import React, { Component } from 'react'
import TasksList from '../components/TasksList'

class Home extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                </header>

                <div className="App-body">
                    <TasksList></TasksList>
                </div>
            </div>
        );
    }
}

export default Home;