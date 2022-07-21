const getAllPosts = async () => {
  return fetch('http://localhost:3000/api/posts')
    .then((response) => response.json())
    .catch((err) => {
      console.log(err.message);
    });
}

export const getPostById = (id) => {
  return fetch(`http://localhost:3000/api/posts/${id}`)
    .then((response) => response.json())
    .catch((err) => {
      console.log(err.message);
    });
}

export const addNewPost = (data) => {
  return fetch(`http://localhost:3000/api/posts`, {
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

export const deletePost = (id) => {
  return fetch(`http://localhost:3000/api/posts/${id}/delete`, {method:'DELETE'})
    .then((response) => response.json())
    .catch((err) => {
      console.log(err.message);
    });
} 

export const editPost = (id, data) => {
  return fetch(`http://localhost:3000/api/posts/${id}/edit`, {
    method:'PUT',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then((response) => response.json())
    .catch((err) => {
      console.log(err.message);
    });
} 

export default getAllPosts;