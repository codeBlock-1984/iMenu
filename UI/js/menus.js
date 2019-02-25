const addToMenuElements = document.getElementsByClassName('addToMenu');

for(let i = 0; i < addToMenuElements.length; i++){
  const element = addToMenuElements[i];  
  element.addEventListener('click', addToMenu);
}

function addToMenu(){
    const addToMenuButton = this;
    const menuOuter = document.getElementById('menu-box-outer');
    //const menu = document.getElementById('menu-box');
    const buttonOverlay = this.parentNode;
    //debugger;
    console.log(buttonOverlay);
    const buttonDiv = (buttonOverlay.parentNode).children[2];
    const mealImageUrl = (buttonOverlay.parentNode).children[1].src;
    console.log(mealImageUrl);
    const mealName = buttonDiv.children[0].innerHTML;
    const mealPrice = buttonDiv.children[1].innerHTML;

    this.onclick = () => {
        const newImageDiv = document.createElement('div');
        newImageDiv.classList.add('menuImage');
        const newDetailsDiv = document.createElement('div');
        newDetailsDiv.classList.add('menuDetails');
        const newMenuItemName = document.createElement('h2');
        const newMenuItemPrice = document.createElement('h6');
        const newMenuItemIcon = document.createElement('i');
        newMenuItemIcon.classList.add('fas', 'fa-trash-alt', 'deleteMenuItem');
        newMenuItemIcon.addEventListener('click', deleteMenuItem);
        const newMenu = document.createElement('div');
        newMenu.classList.add('menu-box');

        newImageDiv.style.backgroundImage = `url(${mealImageUrl})`;
        newMenuItemName.innerHTML = mealName;
        newMenuItemPrice.innerHTML = mealPrice;
        newDetailsDiv.appendChild(newMenuItemName);
        newDetailsDiv.appendChild(newMenuItemPrice);
        newDetailsDiv.appendChild(newMenuItemIcon);
        newMenu.appendChild(newImageDiv);
        newMenu.appendChild(newDetailsDiv);
        menuOuter.appendChild(newMenu);

    }
}

const deleteButtons = document.getElementsByClassName('deleteMenuItem');

for(let i = 0; i < deleteButtons.length; i++){
  const element = deleteButtons[i];  
  element.addEventListener('click', deleteMenuItem);
}

function deleteMenuItem(){
  const iconBox = this.parentNode; 
  const iconDiv = iconBox.parentNode;
  const menuDel = iconDiv.parentNode; 
  const result = confirm('Are you sure you want to remove this item?');
  if(result){  
  menuDel.removeChild(iconDiv);
  } else return;
    
}