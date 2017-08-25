export const signup = (user) => {
  return $.ajax ({
    method: 'POST',
    url: 'api/users',
    data: { user }
  });
};

export const login = (user) => {
  return $.ajax ({
    method: 'POST',
    url: 'api/sessions',
    data: { user }
  });
};

export const logout = () => {
  console.log("AJAXING");
  return $.ajax ({
    method: 'DELETE',
    url: `api/sessions/:id`,
  });
};