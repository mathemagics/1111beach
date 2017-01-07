import firebase from 'firebase';

export const LOGIN_ATTEMPT = 'LOGIN_ATTEMPT';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';

export const loginAttempt = ({ username, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_ATTEMPT });
    firebase.auth().signInWithEmailAndPassword(username, password)
    .then(() => {
      dispatch({ type: LOGIN_SUCCESS });
    })
    .catch();
  };
};

export function logout() {
  return (dispatch) => {
    firebase.auth().signOut()
    .then(() => dispatch({ type: LOGOUT });
  };
}
