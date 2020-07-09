export const getUsers = () => {
  return async (dispatch, getState) => {
    const resp = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await resp.json();
    dispatch({
      type: "GET_USERS",
      payload: {
        users,
      },
    });
  };
};

// numrber, id
export const getUser = (userId) => {
  return async (dispatch) => {
    const resp = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    const user = await resp.json();
    dispatch({
      type: "GET_USER",
      payload: {
        user,
      },
    });
  };
};
