var removeClassElements = document.getElementsByClassName('delete');

for(var i = 0; i < removeClassElements.length; i++){
  var element = removeClassElements[i];  
  element.addEventListener('click', remove);
}

var editClassElements = document.getElementsByClassName('edit');

for(var i = 0; i < editClassElements.length; i++){
  var element = editClassElements[i];  
  element.addEventListener('click', edit);
}

var addClassElements = document.getElementsByClassName('add');

for(var i = 0; i < addClassElements.length; i++){
  var element = addClassElements[i];  
  element.addEventListener('click', add);
}

function add() {
  var addModalBox = document.getElementById('addModal');
  var addBtn = this;
  var closeBtn = document.getElementsByClassName("close")[0];

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

var modalAddButton = document.getElementById('submitNewButton');
modalAddButton.addEventListener('click', createMeal);

function createMeal(){
  var addModalBoxClose = document.getElementById('addModal');
  var form = document.getElementById('addMealForm');

  var mealImgUrl = document.getElementById('mealImgUrl').value;
  var mealName = document.getElementById('mealName').value;
  var mealPrice = document.getElementById('mealPrice').value;
  var newMealDiv = document.createElement('div');
  newMealDiv.classList.add('meal-box');
  var newAddIcon = document.createElement('i');
  newAddIcon.classList.add('fa', 'fa-plus', 'add');
  var newEditIcon = document.createElement('i');
  newEditIcon.classList.add('fa', 'fa-align-center', 'edit');
  var newDeleteIcon = document.createElement('i');
  newDeleteIcon.classList.add('fa', 'fa-trash', 'delete');
  var newMealImg = document.createElement('img');
  newMealImg.src = mealImgUrl;
  var newMealName = document.createElement('h2');
  newMealName.innerHTML = mealName; 
  var newMealPrice = document.createElement('h6');
  newMealPrice.innerHTML = mealPrice;
  newMealDiv.appendChild(newDeleteIcon);
  newMealDiv.appendChild(newEditIcon);
  newMealDiv.appendChild(newAddIcon);
  newMealDiv.appendChild(newMealImg);
  newMealDiv.appendChild(newMealName);
  newMealDiv.appendChild(newMealPrice);
  wrapper = document.getElementById('meal-box-container');
  wrapper.appendChild(newMealDiv);
  addModalBoxClose.style.display = "none";
  form.reset();
}

function remove() {
  var li = this.parentNode;
  var ul = li.parentNode;  
  var result = confirm('Are you sure you want to delete this item?');
  if(result){  
  ul.removeChild(li);
  } else return;
  
}

function edit() {
  var li = this.parentNode;
  var span = li.children[4];
  var price = li.children[5];
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