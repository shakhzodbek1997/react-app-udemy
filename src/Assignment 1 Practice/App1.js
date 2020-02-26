import React, {Component} from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App1 extends Component {
    state = {
      username: 'superMax'
    };

    usernameChangedHandler = (event)  =>{
        this.setState({username: event.target.value});
    };

    render() {
        return (
            <div className="App">
                <ol>
                    <li>Tasks here 1</li>
                    <li>Tasks here 2</li>
                    <li>Tasks here 3</li>
                    <li>Tasks here 4</li>
                    <li>Tasks here 5</li>
                    <li>Tasks here 6</li>
                    <li>Tasks here 7</li>
                    <li>Tasks here 8</li>
                    <li>Tasks here 9</li>
                    <li>Tasks here 10</li>
                </ol>
                <UserInput
                    changed={this.usernameChangedHandler}
                    currentName={this.state.username}/>
                <UserOutput userName={this.state.username}/>
                <UserOutput userName={this.state.username}/>
                <UserOutput userName="Max"/>
            </div>
        );
    }
}

export default App1;