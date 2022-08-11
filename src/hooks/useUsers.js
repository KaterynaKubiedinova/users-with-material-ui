import { useCallback, useEffect, useState } from "react";
import {
	getUsersList,
	updateUser,
	createUser,
	deleteUser
} from "../services/usersServices";
import { useBooleanFlag } from "./common"

export default function useUsers() {
	const [users, setUsers] = useState([]);
	
	const [isLoading, toogleIsLoading] = useBooleanFlag(false);

	const refresh = useCallback(() => {
		toogleIsLoading(true);
		getUsersList().then((data) => {
			setUsers(data);
			toogleIsLoading(false);
		});
		},[toogleIsLoading]);

	const remove = useCallback(
		(id) => {
			toogleIsLoading(true);
			deleteUser(id).then(() => {
				setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
				toogleIsLoading(false);
			});
		},
	[toogleIsLoading]);

	const save = useCallback(
		(item) => {
			toogleIsLoading(true);
			if (item.id) {
				updateUser(item).then((data) => {
					setUsers((prevUsers) => prevUsers.map((user) => user.id === item.id ? data : user));
					toogleIsLoading(false);
				});
			} else {
				createUser(item).then((data) => {
					setUsers((prevUsers) => [...prevUsers, data]);
					toogleIsLoading(false);
				})
			}
		},
	[toogleIsLoading]);

	useEffect(refresh, [refresh]);

	return {
		users,
		isLoading,
		save,
		remove,
		refresh
	};
}