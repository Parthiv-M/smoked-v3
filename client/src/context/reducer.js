let token = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : "";

export const initialState = {
  token: token,
};
 
export const AuthReducer = (initialState, action) => {
  switch (action.type) {
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};