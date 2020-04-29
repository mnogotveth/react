import React from "react";
import { connect } from "react-redux";
import { sendMessage } from "../store";


class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nick: "",
      message: ""
    };

    this.sendMessage = this.sendMessage.bind(this);
  }

  sendMessage() {
    this.props.dispatch(sendMessage({
      message: this.state.message,
      nick: this.state.nick
    }));
    this.setState({ message: "" });
  }


  render() {
    return <form>
      <input
        value={this.state.nick}
        type="text"
        onChange={(event) => this.setState({ nick: event.target.value })} />
      <br />
      <textarea
        value={this.state.message}
        onChange={(event) => this.setState({ message: event.target.value })}>
      </textarea>
      <br />
      <input type="button" value="Send" onClick={this.sendMessage} />
    </form>;
  }
}

export default connect()(MessageForm);