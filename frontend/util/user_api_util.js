
export const fetchUserInfo = (userId) => {

  return $.ajax({
    url: `/api/users/${userId}`,
    method: 'get'
  });
};
