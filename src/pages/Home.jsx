import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
	return (
		<nav style={{padding: '35px', background: '#d3c6ea'}}>
			<Link 
				to={'/users'} 
				style={{textDecoration: 'none', 
					color: '#5a31aa', 
					fontSize: '30px', 
					fontWeight: '600'}}>USERS
			</Link>
		</nav>
	);
}

