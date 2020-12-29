import React from 'react';

import Message from './Message.jsx';
import Example from './Example';
import MessageField from './MessageField';
import SendMessage from './SendMessage';

import '../styles/App.css';

export default class App extends React.Component {

    constructor(props){
        super(props);

    this.state = {
        text: 'Some text from state',
        timeout: null,
        messages: [],
        interval: null
    };
    }

    componentDidUpdate() {
        console.log('componentWillUpdate');
        console.log(this.state.messages.length, this.state.messages.length % 2);
        if(this.state.messages.length % 2 > 0){
            const timeout = setTimeout(
                () => {
                    this.setState({messages: [...this.state.messages, {message: 'I do not answer you. I am robot', author: 'robot'}]});
                    this.setState({timeout});
                },
                2000
            );
    }
}

    componentWillMount() {
        clearTimeout(this.state.timeout);
        this.setState({timeout: null});
}

    send = objMsg => {
        this.setState({messages: [...this.state.messages, objMsg]});
    };

    render() {
        console.log('render');
        return  <main>
            <MessageField messages={this.state.messages}/>
            <SendMessage send={this.send}/>
        </main>
    }
}