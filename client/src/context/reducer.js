let token = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : "";

let score = localStorage.getItem("score")
  ? localStorage.getItem("score")
  : 0;
// let username=localStorage.getItem("userdetails").username
//     ? localStorage.getItem("userdetails").username
//     : "";
// let level=localStorage.getItem("userdetails").level
//     ? localStorage.getItem("userdetails").level
//     : 0;

export const initialState = {
  token: token,
  score: score,
  level:0,
  username:""
};
 
export const AuthReducer = (initialState, action) => {
  switch (action.type) {
    case 'set':
      const {token,username,level,score}=action.payload;
      return{
        ...initialState,
        token,
        username,
        level,
        score
      }
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};