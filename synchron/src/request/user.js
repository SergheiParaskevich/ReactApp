 export const getAllUsers = (callback) => fetch('https://dummyjson.com/users')
    .then(response => response.json())
    .then(users_obj => callback(users_obj.users))