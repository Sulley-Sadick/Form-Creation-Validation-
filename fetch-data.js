// fetchUserData function
const fetchUserData = async function () {
  try {
    // api URL
    const apiUrl = "https://jsonplaceholder.typicode.com/users";

    // select dataContainer
    const dataContainer = document.getElementById("api-data");

    // Fetch the data using the fetch function and stop execution of code until data is received using the await  keyword
    const response = await fetch(apiUrl);

    // Have access to the real data that we can work with using the await keyword to get the resolved data
    const users = await response.json();

    // clear html element in the dataContainer
    dataContainer.innerHTML = "";

    // create userList variable with ul elements
    const userList = document.createElement("ul");

    // loop over the users array
    users.forEach((user) => {
      // create li element at each iteration
      const li = document.createElement("li");

      // set textContent of li = user.name
      li.textContent = user.name;

      // append li to userList elements
      userList.append(li);
    });

    // userList to dataContainer
    dataContainer.append(userList);

    console.log(userList);
  } catch (err) {
    // set textContent of dataContainer = ""
    dataContainer.textContent = "";

    // set textContent of dataContainer = Failed to load user data
    dataContainer.textContent = " Failed to load user data.";
  }
};

// add DOMContentLoaded event to window object
document.addEventListener("DOMContentLoaded", fetchUserData);
