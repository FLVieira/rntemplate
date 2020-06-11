export function signInRequest(email, password) {
  return {
    type: '@user/SIGN_IN_REQUEST',
    payload: { email, password },
  };
}

export function signInSuccess(data) {
  return {
    type: '@user/SIGN_IN_SUCCESS',
    payload: { data },
  };
}

export function signInFailure() {
  return {
    type: '@user/SIGN_IN_FAILURE',
  };
}
