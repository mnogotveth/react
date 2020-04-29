import React from 'react';
import './App.css';
import axios from "axios";
import MessagesList from "./components/MessagesList";
import MessageForm from "./components/MessageForm";
import { connect } from "react-redux";
import { fetchMessages } from "./store"


const apiUrl = "http://localhost:3001";


class App extends React.Component {

    state = {
        messages: [],
    };

    componentDidMount = () => {
        setInterval(() => this.props.dispatch(fetchMessages()), 1000);
    };

    render() {
        const {messages} = this.state;

        return (
            <div className="App">
                <MessagesList messages={messages}/>
                <MessageForm sendMessage={this.sendMessage} />
            </div>
        );
    }
}

export default connect()(App);

