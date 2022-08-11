import React from 'react';
import UserForm from '../components/UserForm';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../themes/newThemes';
import { useLocation } from 'react-router-dom';

export default function UserCreatePage() {
	let location = useLocation();
	const user = location.state;
	
	return (
		<div>
			<ThemeProvider theme={theme}>
				<UserForm  user={user}/>
			</ThemeProvider>
		</div>
	);
}