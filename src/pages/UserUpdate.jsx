import React from 'react';
import { useLocation } from 'react-router-dom';
import UserForm from '../components/UserForm';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../themes/newThemes';

export default function UserUpdatePage() {
	let location = useLocation();
	const user = location.state;
	
	return (
		<ThemeProvider theme={theme}>
			<UserForm  user={user}/>
		</ThemeProvider>
	);
}

