import React, {Component} from 'react';
import Message from './Message';

export default class Example extends Component {
    state = {
        count: 0,
        text: ''
    };

    click = (event) => {
        this.setState({count: this.state.count + 1})
    }

    change = (event) => {
        this.setState({text: event.target.value})
    }

    render() {
        return <div>
            <Message text={`Count click - ${this.state.count}`}/>
            <button onClick={this.click}>+1</button>
            <br/>
            <Message text={this.state.text}/>
            <input value={this.state.text} onChange={this.change}/>
        </div>;
    }
}