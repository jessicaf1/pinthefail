export const fetchUsers = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/users'
    })
}

export const fetchUser = (id) => {
    return $.ajax({
        method: 'GET',
        url: `/api/users/${id}`
    })
}

// export const createUser = (formData) => {
//     return $.ajax({
//       method: "POST",
//       url: "/api/users",
//       data: { formData },
//       contentType: false,
//       processData: false
//     });
// }

export const updateUser = (user, userId) => {
    debugger
    return $.ajax({
      method: "PATCH",
      url: `/api/users/${userId}`,
      data: { user },
      contentType: false,
      processData: false
    });
    
}