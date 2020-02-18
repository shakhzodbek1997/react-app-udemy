import React, {Component, useState} from "react";
import './App.css';
import Person from "./Person/Person";
import App from "./Assignment 1 Practice/App";

class app extends Component {
    state = {
        persons: [
            {name: 'Max', age: 28},
            {name: 'Manuel', age: 29},
            {name: 'Stephanie', age: 18}
        ],
        otherState: 'some other value'
    };

    switchNameHandler = (newName) => {
        // console.log('Was clicked!');
        // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
        this.setState({
            persons: [
                {name: newName, age: 28},
                {name: 'Manuel', age: 29},
                {name: 'Stephanie', age: 27}
            ]
        })

    };

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                {name: 'Max', age: 28},
                {name: event.target.value, age: 29},
                {name: 'Stephanie', age: 85}
            ]
        })
    };

    render() {
        const style = {
          backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        return (
            <div className="App">
                <h1>Hi, I'm a React App!!!</h1>
                <p>This is really working!</p>
                <button
                    className="test"
                    style={style}
                    onClick={() => this.switchNameHandler('Maximilian!')}>
                    Switch Name
                </button>


                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}
                    click={this.switchNameHandler.bind(this, 'Max')}/>

                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    changed={this.nameChangedHandler}
                    click={this.switchNameHandler.bind(this, 'Max!!')}> My Hobbies: Racing</Person>

                <Person
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age}/>



                    {/*xxxxxxxxxxx   ASSIGNMENT 1 PRACTICE TIME=======================*/}
                    <App />
            </div>
        );
        /*return  React.createElement('div', {className: 'App'},React.createElement('h1', null, "Does this work now?"));*/
    }
};

export default app;