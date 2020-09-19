import React from 'react';
import ReactDOM from 'react-dom';
import Message from './components/Message'


class MessageHistory extends React.Component {
	constructor() {
		super();
		this.textInput = React.createRef();

		this.state = {
			count: 0,
			message: '',
			messagesList: []

		};

		this.onClick = this.onClick.bind(this);
		this.onInputChange = this.onInputChange.bind(this);
	}

	onInputChange(e) {
		const { message } = this.state;
		this.setState({ message: e.target.value });
	}

	onClick(e) {
		e.preventDefault();
		const { count, messagesList, message } = this.state;
		this.setState({ count: count + 1 });
		this.setState({ messagesList: [...messagesList, { id: count, name: 'You', text: message }] });
		this.setState({ message: '' });
		this.inputFocus();
	}

	inputFocus() { this.textInput.current.focus(); }

	render() {
		return (
			<div>
				<h1>Hello, {this.props.name}</h1>
				{this.state.messagesList.map(item => (
					<Message key={item.id} message={item} />
				))}
				<form onSubmit={this.onClick}>
					<input ref={this.textInput} type="text" autoFocus={true} value={this.state.message} onChange={this.onInputChange} />
					<button type="submit">Inc</button>
				</form>
			</div>
		);
	}
}

ReactDOM.render(
	<MessageHistory name="Bob" />,
	document.getElementById("hello-ex")
);