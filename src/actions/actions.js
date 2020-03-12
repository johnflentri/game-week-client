import request from 'superagent'
export const JWT = "JWT";
export const NEW_USER = "NEW_USER";
export const ALL_IMAGES = 'ALL_IMAGES'
export const NEW_IMAGE = 'NEW_IMAGE'

const baseUrl = "http://localhost:4000"

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

function allImages(payload) {
  return {
    type: ALL_IMAGES,
    payload
  }
}

export const getImages = () => (dispatch, getState) => {
  const state = getState()
  const { imageReducer } = state
  if (!imageReducer.length) {
    request(`${baseUrl}/image`)
      .then(response => {
        console.log("From actions.js, this is response.body in the form of dispatch(action) by getImages function", response.body)
        const action = allImages(response.body)
        dispatch(action)
      })
      .catch(console.error)
  }
}

function newImage(payload) {
  return {
    type: NEW_IMAGE,
    payload
  }
}

export const createImage = data => (dispatch, getState) => {
  const state = getState()
  const { userReducer } = state
  request
    .post(`${baseUrl}/image`)
    .set('Authorization', `Bearer ${userReducer.jwt}`)
    .send(data)
    .then(response => {
      const action = newImage(response.body)
      dispatch(action)
    })
    .catch(console.error)
}