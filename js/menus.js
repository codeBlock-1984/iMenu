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
        const newMenu = document.createElement('div');
        newMenu.classList.add('menu-box');

        newImageDiv.style.backgroundImage = `url(${mealImageUrl})`;
        newMenuItemName.innerHTML = mealName;
        newMenuItemPrice.innerHTML = mealPrice;
        newDetailsDiv.appendChild(newMenuItemName);
        newDetailsDiv.appendChild(newMenuItemPrice);
        newMenu.appendChild(newImageDiv);
        newMenu.appendChild(newDetailsDiv);
        menuOuter.appendChild(newMenu);

    }
}