import request from 'superagent'

const baseUrl = "http://localhost:4000"

export const JWT = "JWT";
function loginUser(payload) {
  return {
    type: JWT,
    payload
  };
}
export const login = (email, password) => (dispatch, getState) => {
  request
    .post(`${baseUrl}/login`)
    .send({ email: email, password: password })
    .then(response => {
      const action = loginUser(response.body);
      dispatch(action);
    })
    .catch(console.error);
};
export const NEW_USER = "NEW_USER";
function newUser(payload) {
  return {
    type: NEW_USER,
    payload
  };
}
export const createUser = data => (dispatch, getState) => {
  request
    .post(`${baseUrl}/user`)
    .send(data)
    .then(response => {
      const action = newUser(response.body);
      dispatch(action);
    })
    .catch(console.error);
};