// 1 url

let Product_url = "http://localhost:5000/Posts";

// 2 create a function to post the data

const Post_data = (x) => {
  x.preventDefault();
  console.log("post call");
  let Title = document.getElementById("title");
  let Price = document.getElementById("price");
  let Image = document.getElementById("image");
  let Discription = document.getElementById("discription");
 console.log("D", Discription);

  let data = { title: Title.value, Price: Price.value, Image: Image.value, Discription: Discription.value };

  fetch(Product_url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};
