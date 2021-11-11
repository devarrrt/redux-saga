export const getUserAlbums = async (userId) => {
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  ).then((res) => res.json());
  // return
  console.log(data.json);
};
