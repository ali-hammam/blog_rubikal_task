import {ApiRequests} from './ApiRequests';
const request = ApiRequests();

export const createNewUser = (data) => request.post(`/api/users`, data);
