// 1 url
// 2 create a function to get the data
// 3 call the function using a btn eventhandler onclick
// 4 container where we will display the data
// 5 fetch the data from the url using fetch method which returns a promise
// 6 the promise will be resolved when the await keyword is used
// 7 the res will be in json format so we need to convert it to json
// 8 we need to display the data in the container

let User_url = "https://jsonplaceholder.typicode.com/users";

const get_user_data = async () => {
  console.log("start step 4");
  let container = document.getElementById("display-cards");
  let res = await fetch(User_url);
  // console.log(res.json())
  let Users = await res.json();
  console.log(Users);
  Users.map((x) => {
    container.innerHTML += `
        <div class="card">
        <h1>           NAME: ${x.name} </h1>
         <h2> EMAIL: ${x.email}</h2>

         <h3> USERNAME: ${x.username} </h3>

         <h4> STREET: ${x.address.street} </h4>
        </div>
        `;
  });
};

// get the data when the page is loaded
window.onload = get_user_data();
