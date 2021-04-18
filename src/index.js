let addToy = false;

const toyDiv = document.querySelector('#toy-collection');
const baseUrl = "http://localhost:3000/toys";

function getToys() {
   return fetch(baseUrl).then(function (res) {
     return res.json();
  }).then(function (json) {
    toys = json
    toys.forEach(toy => renderToys(toy))
  }).catch(function (error) {
    console.log(error);
  })
}

function renderToys(toy) {
  console.log(toy);
    const newToy = document.createElement('div')
    newToy.innerText = toy.name
    toyDiv.append(newToy)
}

getToys();



document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  
  addBtn.addEventListener("click", () => {
          // hide & seek with the form
          addToy = !addToy;
          if (addToy) {
            toyFormContainer.style.display = "block";
          } else {
            toyFormContainer.style.display = "none";
          }
        });
        
        
        


});
              