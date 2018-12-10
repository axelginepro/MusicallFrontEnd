export default function(user = {}, action) {
  if (action.type === 'addUser') {
    return action.userId;
  };
  return user;
};
