import React from 'react';
import { Route, Routes } from 'react-router-dom';
import '../style/App.scss';
import Home from '../page/Home';
import Chat from '../page/Chat';
import Profile from '../page/Profile';
import NotFound from '../page/NotFound';






function App() {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='chat' element={<Chat />} />
			<Route path='profile' element={<Profile />} />
			<Route path='*' element={<NotFound />} />
		</Routes>
	);
}

export default App;
