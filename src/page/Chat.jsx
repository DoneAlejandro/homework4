import React, { useState } from 'react';

const Chat = () => {
	let random = Math.round(Math.random() * 100);
	const [name, setName] = useState('');
	const [text, setText] = useState("");
	const [chat, setChat] = useState([
		// {
		// 	id: random,
		// 	name: 'Пётр'
		// }
	]);

	const addMessage = () => {
		let newMessage = {
			id: random,
			name: name,
			text: text
		}

		setChat(prevState => [...prevState, newMessage]);

	};

	const delMessage = (id) => {
		let newValue = chat.filter((item) => item.id !== id);
		setChat(newValue);
	}


	return (
		<div className='box'>
			<div className='message-form'>
				<input className='name' name={name} value={name} onChange={(e) => setName(e.target.value)} />
				<input className='mess' name='text' value={text} onChange={(e) => setText(e.target.value)} />
				<button className='btn' onClick={addMessage}>Отправить</button>
			</div>

			{chat.map((chat) => {
				return (
					<div className='add-mess' key={chat.id}>
						<span className='add-name'>{chat.name}</span>
						<p className='add-text' >{chat.text}</p>
						<button className='btn-del' onClick={() => delMessage(chat.id)}>Удалить</button>
					</div>
				)
			})}
		</div>
	);
};

export default Chat;