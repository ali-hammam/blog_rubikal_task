export const addCommentToPost = (id, data) => {
  return fetch(`http://localhost:3000/api/posts/${id}/addcomment`, {
    method:'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    },
  }).then((response) => response.json())
    .catch((err) => {
      console.log(err.message);
    });
}

export const deleteCommentFromPost = (comment_id) => {
  return fetch(`http://localhost:3000/api/comments/${comment_id}/delete`, {method:'DELETE'})
    .then((response) => response.json())
    .catch((err) => {
      console.log(err.message);
    });
}