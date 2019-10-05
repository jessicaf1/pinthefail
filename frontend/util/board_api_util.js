export const fetchBoards = () => {
  return $.ajax({
    method: "GET",
    url: "/api/boards"
  });
};

export const fetchBoard = id => {
  return $.ajax({
    method: "GET",
    url: `/api/users/${id}`
  });
};

export const createBoard = user => {
  return $.ajax({
    method: "POST",
    url: "/api/users",
    data: { user }
  });
};

export const updateBoard = user => {
  return $.ajax({
    method: "PATCH",
    url: `/api/users/${user.id}`,
    data: { user }
  });
};
