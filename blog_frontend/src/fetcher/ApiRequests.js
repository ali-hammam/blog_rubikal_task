import { getFromLocalStorage } from "../config/localStorage";

export function ApiRequests() {
  const apiHost = 'http://localhost:3000';

  return{ 
    get: function (url){
      return fetch( apiHost + url, {
        method:'GET',
        headers: {
          'Authorization': `Bearer ${getFromLocalStorage('token')}` 
        }, 
      })
      .then((response) => response.json())
      .catch((err) => {
        console.log(err.message);
      });
    },

    post: function (url, data){
      return fetch( apiHost + url, {
        method:'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${getFromLocalStorage('token')}` 
        },
      }).then((response) => response.json())
        .catch((err) => {
          console.log(err.message);
        });
    },

    delete: function (url){
      return fetch( apiHost + url, {
        method:'DELETE',
        headers: {
          'Authorization': `Bearer ${getFromLocalStorage('token')}` 
        },
      })
      .then((response) => response.json())
      .catch((err) => {
        console.log(err.message);
      });
    },

    put: function(url, data){
      return fetch( apiHost + url, {
        method:'PUT',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${getFromLocalStorage('token')}` 
        },
      })
        .then((response) => response.json())
        .catch((err) => {
          console.log(err.message);
        });
    }
  }
}