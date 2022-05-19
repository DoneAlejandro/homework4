import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
	return (
		<div className='wrapper'>
			<NavLink className='link' to={'/profile'}>
				Профиль
			</NavLink>
			<NavLink className='link' to={'/chat'}>
				Чат
			</NavLink>
		</div>
	);
};

export default Home;