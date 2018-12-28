
export const SIGN_IN = 'A_SIGN_IN';
export const SIGN_OUT = 'A_SIGN_OUT';

export function signIn(username) {
  return {
    type: SIGN_IN,
    username,
  }
}

export function signOut() {
  return {
    type: SIGN_OUT,
  }
}
