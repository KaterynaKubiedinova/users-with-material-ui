import React from 'react';
import UsersTable from '../components/UsersTable';
import useUsers from '../hooks/useUsers';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { ThemeProvider,styled } from '@mui/material/styles';
import { theme } from '../themes/newThemes';


const MainButton = styled(Button)({
	margin: 15,
	fontWeight: 600,
	fontSize: 20,
	width: 150,
})

const NewUser = {
	name: '',
	surname: '',
	phone: '',
}

export default function UsersPage() {
	const { users, remove } = useUsers();
	let navigate = useNavigate();

	function onUserBtnClick(user) {
		if (user.id) {
			navigate(`/user/${user.id}`, {state: user});
		} else {
			navigate('/user/create', {state: user});
		}
	}

	function toHomePage() {
		navigate('/');
	}

	function onDeleteBtnClick(id) {
		remove(id);
	}

	return (
		<div style={{margin: '10px'}}>
			<ThemeProvider theme={theme}>
				<span style={{fontSize: '35px', color: '#5a31aa', fontWeight: '600'}}>USERS</span>
				<div>
				<MainButton
					variant="contained" 
					onClick={onUserBtnClick.bind(null, NewUser)}>ADD USER</MainButton>
				<MainButton
					variant="contained" 
					onClick={toHomePage}>HOME</MainButton>
				</div>
				<UsersTable 
					users={users} 
					onUserBtnClick={onUserBtnClick}
					onDeleteBtnClick={onDeleteBtnClick}/>
			</ThemeProvider>
		</div>
	);
}

