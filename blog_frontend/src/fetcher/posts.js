import {ApiRequests} from './ApiRequests';
const request = ApiRequests();

const getAllPosts = async () => request.get('/api/posts')

export const getPostById = (id) => request.get(`/api/posts/${id}`);

export const addNewPost = (data) => request.post('/api/posts', data)

export const deletePost = (id) => request.delete(`/api/posts/${id}/delete`)

export const editPost = (id, data) => request.put(`/api/posts/${id}/edit`, data)

export default getAllPosts;