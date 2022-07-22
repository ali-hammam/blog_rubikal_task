import {ApiRequests} from './ApiRequests';
const request = ApiRequests();

export const UserLogin = (data) => request.post(`/api/auth/login`, data);
