let token = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : "";

let score = localStorage.getItem("score")
  ? localStorage.getItem("score")
  : "";

export const initialState = {
  token: token,
  score: score
};
 
export const AuthReducer = (initialState, action) => {
  switch (action.type) {
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};