export const OPEN_LOGIN = "OPEN_LOGIN";
export const OPEN_SIGNUP = "OPEN_SIGNUP";
export const CLOSE_AUTH = "CLOSE_AUTH";

export const openLogin = () => ({
  type: OPEN_LOGIN
});

export const openSignup = () => ({
  type: OPEN_SIGNUP
});

export const closeAuth = () => ({
  type: CLOSE_AUTH
});
