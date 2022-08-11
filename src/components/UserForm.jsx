import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/material';
import useUsers from '../hooks/useUsers';
import { useNavigate } from 'react-router-dom';

const FormButton = styled(Button)({
	margin: 15,
	fontSize: 18,
	width: 100,
});

const NewTextField = styled(TextField)({
	margin: 15,
});

export default function UserForm({user}) {
	const [updateUser, setUpdateUser] = useState({...user});
	const {name, surname, phone} = updateUser;
	const {save, remove} = useUsers();
	const navigate = useNavigate();

	function onSave(e) {
		e.preventDefault();
		save(updateUser);
		navigate('/users');
	}

	function onBlurForm(e) {
		e.preventDefault();
		save(updateUser);
	}

	function onCancel(e) {
		e.preventDefault();
		
		if (user.id) {
			save(user);
			navigate('/users');
		} else {
			navigate('/users');
		}
	}

	function onChangeText(e) {
		setUpdateUser({
			...updateUser,
			[e.target.name]: e.target.value,
		});
	}
	
	return (
		<form className='users-form'>
			<fieldset style={{color: '#4e0e96', fontSize: '25px'}}>
				<legend>Enter your information</legend>
				<NewTextField 
					onBlur={onBlurForm}
					onChange={onChangeText} 
					name='name' 
					id="outlined-basic" 
					value={name} 
					label="Name"/>
				<NewTextField 
					onBlur={onBlurForm}
					onChange={onChangeText} 
					name='surname' 
					id="outlined-basic" 
					value={surname} 
					label="Surname"/>
				<NewTextField 
					onBlur={onBlurForm}
					onChange={onChangeText} 
					name='phone' 
					id="outlined-basic" 
					value={phone} 
					label="Phone"/>
				<FormButton variant="contained" onClick={onSave}>SAVE</FormButton>
				<FormButton variant="contained" onClick={onCancel}>CANCEL</FormButton>
			</fieldset>
		</form>
	);
}
