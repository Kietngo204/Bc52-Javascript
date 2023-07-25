async function getUsers() {
  const response = await axios({
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/users",
  });
  console.log(response.data);
}
getUsers();
