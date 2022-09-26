export default function getUsername() {
  const user = getfromStorage("auth");
  console.log(user);

  if (user) {
    return user.username;
  }
  return null;
}

function getfromStorage(key) {
  const value = localStorage.getItem(key);

  if (!value) {
    return [];
  }

  return JSON.parse(value);
}
