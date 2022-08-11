import React from 'react';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';

export default function UsersTableItem({StyledTableCell, user, onUserBtnClick, onDeleteBtnClick}) {
  const { name, surname, phone, id } = user;
  
  function onEdit(e) {
    e.stopPropagation();
    onUserBtnClick(user);
  }
  
  function onDelete(e) {
    e.stopPropagation();
    onDeleteBtnClick(id);
  }

  return (
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <StyledTableCell align="center">{name}</StyledTableCell>
              <StyledTableCell align="center">{surname}</StyledTableCell>
              <StyledTableCell align="center">{phone}</StyledTableCell>
              <StyledTableCell align="center">
                <Button variant="contained" onClick={onDelete}>DELETE</Button>
              </StyledTableCell>
              <StyledTableCell align="center">
                <Button variant="contained" onClick={onEdit}>EDIT</Button>
              </StyledTableCell>
            </TableRow>
	);
}
