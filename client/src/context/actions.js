import axios  from 'axios';

// action to sign up a user
export async function signUpUser(dispatch, signUpPayload) {
  try {
    let resp = {}
    await axios({
        method: 'POST',
        url: '/api/user/signUp',
        headers: { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': "*", 
        },
        data: JSON.stringify(signUpPayload),
      })
      .then((response) => {
        if (response.status === 200) {
            resp = response;
        }
      })
      .catch((error) => {
        let errObj = {...error};
        resp = errObj.response;
      });
      return resp;
  } catch (error) {
    
  }
}
