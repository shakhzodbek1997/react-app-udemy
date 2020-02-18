import React, {useState} from "react";
import './App.css';
import Person from "./Person/Person";

const app = props => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [personsState, setPersonState] = useState({
        persons: [
            {name: 'Max', age: 28},
            {name: 'Manuel', age: 29},
            {name: 'Stephanie', age: 18}
        ]
    });

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [otherState, setotherstate] = useState('some other value');
    console.log(personsState, otherState);

    const switchNameHandler = () => {
        // console.log('Was clicked!');
        // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
        setPersonState({
            persons: [
                {name: 'Maximilian', age: 28},
                {name: 'Manuel', age: 29},
                {name: 'Stephanie', age: 85}
            ]
        })

    };

    const nameChangedHandler = (event) => {
        setPersonState({
            persons: [
                {name: 'Maximilian', age: 28},
                {name: event.target.value, age: 29},
                {name: 'Stephanie', age: 85}
            ]
        })
    };

    return (
        <div className="App">
            <h1>Hi, I'm a React App!!!</h1>
            <p>This is really working!</p>
            <button onClick={switchNameHandler}>Switch Name</button>

            <Person
                name={personsState.persons[0].name}
                age={personsState.persons[0].age}
                click={switchNameHandler} />
            <Person
                name={personsState.persons[1].name}
                age={personsState.persons[1].age}
                changed={nameChangedHandler}

            >
                My Hobbies: Racing
            </Person>
            <Person
                name={personsState.persons[2].name}
                age={personsState.persons[2].age}/>
        </div>
    );
    /*return  React.createElement('div', {className: 'App'},React.createElement('h1', null, "Does this work now?"));*/
};

export default app;