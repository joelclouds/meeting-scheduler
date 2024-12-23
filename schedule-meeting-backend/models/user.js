let users = [];
let currentId = 1;

const getAllUsers = () => users;

const addUser = (user) => {
  user._id = currentId++;
  users.push(user);
  return user;
};

const updateUser = (id, updatedUser) => {
  const index = users.findIndex(user => user._id === parseInt(id));
  if (index !== -1) {
    users[index] = { ...users[index], ...updatedUser };
    return users[index];
  }
  return null;
};

const deleteUser = (id) => {
  const index = users.findIndex(user => user._id === parseInt(id));
  if (index !== -1) {
    const deletedUser = users.splice(index, 1);
    return deletedUser[0];
  }
  return null;
};

module.exports = {
  getAllUsers,
  addUser,
  updateUser,
  deleteUser,
};