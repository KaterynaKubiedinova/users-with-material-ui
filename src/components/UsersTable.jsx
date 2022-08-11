import * as React from 'react';
import Table from '@mui/material/Table';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import UsersTableItem from './UsersTableItem';


const StyledTableCell = styled(TableCell)(({ them }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#b7a0dd',
    color: '#4f2ba2',
		fontSize: 20,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
		backgroundColor: '#d3c6ea',
		color: '#3d1f94',
  },
}));


export default function UsersTable({users, onUserBtnClick, onDeleteBtnClick}) {
	return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Name</StyledTableCell>
            <StyledTableCell align="center">Surname</StyledTableCell>
            <StyledTableCell align="center">Phone</StyledTableCell>
            <StyledTableCell align="center"></StyledTableCell>
            <StyledTableCell align="center"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <UsersTableItem 
              key={user.id}
              user={user} 
              StyledTableCell={StyledTableCell} 
              onUserBtnClick={onUserBtnClick}
              onDeleteBtnClick={onDeleteBtnClick}/>))}
        </TableBody>
      </Table>
    </TableContainer>
	);
}
