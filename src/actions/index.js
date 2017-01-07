import firebase from 'firebase';

export const LOGIN_ATTEMPT = 'LOGIN_ATTEMPT';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';

export const GET_POSTS = 'GET_POSTS';

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

export const logout = () => {
  return (dispatch) => {
    firebase.auth().signOut()
    .then(() => { dispatch({ type: LOGOUT }); });
  };
};

export const makePost = (msg) => {
  return () => {
    const ref = firebase.database().ref('/posts');
    const key = ref.push();
    const user = firebase.auth().currentUser;
    const message = {
      msg,
      user: user.uid,
    };
    key.set(message, (error) => {
      if (error) {
        // console.log('failed to send msg');
      }
    });
  };
};

export const getPosts = () => {
  return (dispatch) => {
    const ref = firebase.database().ref('/posts');
    const response = {};
    ref.on('value', (snapshot) => {
      snapshot.forEach((data) => {
        response[data.key] = { ...data.val(), id: data.key };
      });
      dispatch({
        type: GET_POSTS,
        payload: response,
      });
    });
  };
};
