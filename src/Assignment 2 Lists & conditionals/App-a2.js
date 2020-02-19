import React, {Component} from 'react';
import Validation from "./Validation/Validation";
import Char from './Char/Char';

class AppA2 extends Component {

    state = {
        userInput: ''
    };

    inputChangeHandler = (event) => {
        this.setState({userInput: event.target.value});
    };

    deleteCharHandler = (index) =>{
        const text = this.state.userInput.split('');
        text.splice(index, 1);
        const updatedText = text.join('');
        this.setState({userInput: updatedText});
    };

    render() {
        const charlist = this.state.userInput.split('').map((ch, index)=>{
            return <Char
                character={ch}
                key={index}
                clicked={() => this.deleteCharHandler(index)}/>;
        });

        return (
            <div className="App">
                <ol>
                    <li>task 1</li>
                    <li>task 2</li>
                    <li>task 3</li>
                    <li>task 4</li>
                    <li>task 5</li>
                    <li>task 6</li>
                </ol>
                <p>Hint: Keep in mind that Javascript string are basically array</p>
                <hr/>
                <input
                    type="text"
                    onChange={this.inputChangeHandler}
                    value={this.state.userInput}/>
                <p>{this.state.userInput}</p>
                <Validation inputLength={this.state.userInput.length}/>
                {charlist}
            </div>
        );
    }
}

export default AppA2;