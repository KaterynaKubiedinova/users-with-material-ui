import api from "../api/api";
import { NOTES_URI } from "../constants";

export function getUsersList() {
	return api.get(NOTES_URI).then((resp) => resp.data);
};

export function createUser(user) {
	return api.post(NOTES_URI, user).then((resp) => resp.data);
};

export function updateUser(user) {
	return api.put(NOTES_URI + "/" + user.id, user).then((resp) => resp.data);
};

export function deleteUser(id) {
	return api.delete(NOTES_URI + "/" + id).then((resp) => resp.data);
};