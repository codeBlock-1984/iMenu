const removeClassElements = document.getElementsByClassName('delete');

for(let i = 0; i < removeClassElements.length; i++){
  const element = removeClassElements[i];  
  element.addEventListener('click', remove);
}

const editClassElements = document.getElementsByClassName('edit');

for(let i = 0; i < editClassElements.length; i++){
  const element = editClassElements[i];  
  element.addEventListener('click', edit);
}

const addClassElements = document.getElementsByClassName('add');

for(let i = 0; i < addClassElements.length; i++){
  const element = addClassElements[i];  
  element.addEventListener('click', add);
}

function add() {
  const addModalBox = document.getElementById('addModal');
  const addBtn = this;
  const closeBtn = document.getElementsByClassName("close")[0];

  addBtn.onclick = function() {
    addModalBox.style.display = "block";
  }

  closeBtn.onclick = function() {
    addModalBox.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == addModalBox) {
      addModalBox.style.display = "none";
    }
  }
}

const modalAddButton = document.getElementById('submitNewButton');
modalAddButton.addEventListener('click', createMeal);

function createMeal(){
  const addModalBoxClose = document.getElementById('addModal');
  const form = document.getElementById('addMealForm');

  const mealImgUrl = document.getElementById('mealImgUrl').value;
  const mealName = document.getElementById('mealName').value;
  const mealPrice = document.getElementById('mealPrice').value;
  const newMealDiv = document.createElement('div');
  newMealDiv.classList.add('meal-box');
  const newAddIcon = document.createElement('i');
  newAddIcon.classList.add('fa', 'fa-plus', 'add');
  newAddIcon.addEventListener('click', add);
  const newEditIcon = document.createElement('i');
  newEditIcon.classList.add('fas', 'fa-pen', 'edit');
  newEditIcon.addEventListener('click', edit);
  const newDeleteIcon = document.createElement('i');
  newDeleteIcon.classList.add('fa', 'fa-trash', 'delete');
  newDeleteIcon.addEventListener('click', remove);
  const newMealImg = document.createElement('img');
  newMealImg.src = mealImgUrl;
  const newMealDetails = document.createElement('div');
  newMealDetails.id = 'meal-details';
  const newMealName = document.createElement('h2');
  newMealName.innerHTML = mealName; 
  const newMealPrice = document.createElement('h6');
  newMealPrice.innerHTML = mealPrice;
  newMealDetails.appendChild(newMealName);
  newMealDetails.appendChild(newMealPrice);
  newMealDiv.appendChild(newDeleteIcon);
  newMealDiv.appendChild(newEditIcon);
  newMealDiv.appendChild(newAddIcon);
  newMealDiv.appendChild(newMealImg);
  newMealDiv.appendChild(newMealDetails);

  wrapper = document.getElementById('meal-box-container');
  wrapper.appendChild(newMealDiv);
  addModalBoxClose.style.display = "none";
  form.reset();
}

function remove() {
  const li = this.parentNode;
  const ul = li.parentNode;  
  const result = confirm('Are you sure you want to delete this item?');
  if(result){  
  ul.removeChild(li);
  } else return;
  
}

function edit() {
  const li = this.parentNode;
  const span = (li.children[4]).children[0];
  const price = (li.children[4]).children[1];
  span.setAttribute('contenteditable', true);
  price.setAttribute('contenteditable', true);
  span.focus();
  span.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"
        span.setAttribute('contenteditable', false);
        price.focus();
    }
});
  price.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"
        price.setAttribute('contenteditable', false);
    }
});
}