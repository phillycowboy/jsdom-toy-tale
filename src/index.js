let addToy = false;

// document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  // const toyDiv = document.querySelector('#toy-collection');
  // const baseUrl = "https://localhost:3000/toys";

  // function getToys() {
  //   return fetch(baseUrl)
  //   .then((res) => {
  //     return res.json()
  //   }).then((toys) => {
  //     console.log(toys);
  //   })

    
  // }
  
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });

  
  
// });

const toyDiv = document.querySelector('#toy-collection');
const baseUrl = "http://localhost:3000/toys";

function getToys() {
return fetch(baseUrl)
  .then(function(res) {
    return res.json();
  }).then(function(object) {
    console.log(object);
  }).catch(function(error){
      console.log(error);
  })
}

getToys();  