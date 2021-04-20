let addToy = false;
const submitBtn = document.querySelector("#submit");
const toyForm = document.querySelector('#add-new-toy');
const addBtn = document.querySelector("#new-toy-btn");
const toyFormContainer = document.querySelector(".container");
const toyDiv = document.querySelector('#toy-collection');
const likeBtn = document.querySelector("#like-btn");
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
  btn.id = "like-btn";
  newToy.append(h2);
  newToy.append(img);
  newToy.append(p);
  newToy.append(btn);
  toyDiv.append(newToy);
  btn.addEventListener('click', (e) => {
    // document.body.style.backgroundColor = 'red';
    console.log(e.target);
    likes.innerHTML + 1;
  })
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

// need to figure out a way to get the number and then increase it by 1 everytime you click the button. 

function likeToy() {
  let configObj = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({ "likes": 1})
  };
  return fetch("http://localhost:3000/toys/:id", configObj)
    .then(function (res) {
      return res.json()
    })
    .then(function (json) {
      // renderToys({ id: json.id, "name": formData[0].value, "image": formData[1].value, "likes": 0 });
      console.log(json);
      // likeBtn.addEventListener('click', () => {
      //   alert('hi!');
      // })
    })
    .catch(function (error) {
      console.log(error)
    });
}



getToys();



toyForm.addEventListener('submit', (e) =>{
  e.preventDefault();
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

        });
        
        
        


});
              