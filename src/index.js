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
  let name = toy.name;
  let image = toy.image;
  let likes = toy.likes;
  const newToy = document.createElement('div');
  const h2 = document.createElement('h2');
  const img = document.createElement('img');
  const p = document.createElement('p');
  const btn = document.createElement('button');
  newToy.classList = "card";
  h2.innerText = name;
  img.src = image;
  p.innerText = likes;
  img.classList = "toy-avatar";
  btn.classList = "like-btn";
  btn.innerText = "LIKE!!";
  newToy.append(h2);
  newToy.append(img);
  newToy.append(p);
  newToy.append(btn);
  toyDiv.append(newToy);
}

function createToy(formData) {
  console.log("This is the form", formData.value);

  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({"name": formData[0].value, "image": formData[1].value, "likes": 0})
  };
   return fetch(baseUrl, configObj)
  .then(function (res){
    return res.json()
  })
  .then(function (json){
    renderToys({id: json.id, "name": formData[0].value, "image": formData[1].value, "likes": 0});
  }) 
  .catch(function(error){
    console.log(error)
  }); 
}


getToys();


const submitBtn = document.querySelector("#submit");
const toyForm = document.querySelector('#add-new-toy');
const addBtn = document.querySelector("#new-toy-btn");
const toyFormContainer = document.querySelector(".container");

toyForm.addEventListener('submit', (e) =>{
  e.preventDefault();
  console.log(e.target[0].value);
  console.log(e.target[1].value);
  console.log(e.target[2].value);
  // console.log(e.target[0].value)
   createToy(e.target);
    
});
  document.addEventListener("DOMContentLoaded", () => {
  
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    // console.log(submitBtn);
          addToy = !addToy;
          if (addToy) {
            toyFormContainer.style.display = "block";
          } else {
            toyFormContainer.style.display = "none";
          }
          // submitBtn.addEventListener('submit', function(e){
          //   e.preventDefault();
          //   createToy();
          //   console.log("Did i make it?")
          // })
        });
        
        
        


});
              