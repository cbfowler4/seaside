
export const signup = (user) => ({
  url: "/api/users",
  method: "POST",
  data: {user: user}
});

export const login = (user) => ({
  url: "/api/session",
  method: "POST",
  data: {user: user}
});

export const logout = () => ({
  url: "/api/session",
  method: "DELETE",
});
