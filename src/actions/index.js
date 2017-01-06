import firebase from 'firebase';

export const LOGIN_ATTEMPT = 'LOGIN_ATTEMPT';

export const loginAttempt = ({ username, password }) => {
  console.log(username, password);
  return (dispatch) => {
    dispatch({ type: LOGIN_ATTEMPT });
    firebase.auth().signInWithEmailAndPassword(username, password)
    .then(() => {
      console.log('logged in');
    })
    .catch();
  };
};
