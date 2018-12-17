export default function(user = {}, action) {
  if (action.type === 'userData') {
    return action.userId;
  };
  return user;
};
