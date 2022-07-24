import {ApiRequests} from './ApiRequests';
const request = ApiRequests();

export const addCommentToPost = (id, data) => request.post(`/api/posts/${id}/addcomment`, data);

export const deleteCommentFromPost = (comment_id) => request.delete(`/api/comments/${comment_id}/delete`);

export const updateCommentFromPost = (comment_id, body) => request.put(`/api/comments/${comment_id}/update`, body)