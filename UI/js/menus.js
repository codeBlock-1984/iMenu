var addToMenuElements = document.getElementsByClassName('addToMenu');

for(var i = 0; i < addToMenuElements.length; i++){
  var element = addToMenuElements[i];  
  element.addEventListener('click', addToMenu);
}

function addToMenu(){
    var addToMenuButton = this;
    var menu = document.getElementById('menu-box');
    var buttonOverlay = this.parentNode;
    debugger;
    console.log(buttonDiv);
    var buttonDiv = buttonOverlay.parentNode;
    var mealImageUrl = '../' + buttonDiv.children[1].src;
    var mealName = buttonDiv.children[2].innerHTML;
    var mealPrice = buttonDiv.children[3].innerHTML;

    this.onclick = function (){
        var newImageDiv = document.createElement('div');
        newImageDiv.classList.add('menuImage');
        var newDetailsDiv = document.createElement('div');
        newDetailsDiv.classList.add('menuDetails');
        var newMenuItemName = document.createElement('h2');
        var newMenuItemPrice = docmuent.createElement('h6');

        newImageDiv.style.backgroundImage = `url(${mealImageUrl})`;
        newMenuItemName.innerHTML = mealName;
        newMenuItemPrice.innerHTML = mealPrice;
        newDetailsDiv.appendChild(newMenuItemName);
        newDetailsDiv.appendChild(newMenuItemPrice);
        menu.appendChild(newImageDiv);
        menu.appendChild(newDetailsDiv);

    }
}