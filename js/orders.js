const addToOrderElements = document.getElementsByClassName('addToOrder');

for(let i = 0; i < addToOrderElements.length; i++){
  const element = addToOrderElements[i];  
  element.addEventListener('click', addToOrder);
}
let itemIndex = 0;
let totalBill = 0;
let mealCount = 0
const orderTable = document.getElementById('order-table');

function addToOrder(){

    itemIndex++;
    const addToOrder = this;
    const buttonOverlay = this.parentNode;
    const buttonDiv = (buttonOverlay.parentNode).children[2];
    console.log(buttonDiv);
    console.log(buttonOverlay);

    const newItemNo = 1;
    const newItemName = buttonDiv.children[0].innerHTML;
    const newItemPrice = (buttonDiv.children[1].innerHTML).slice(1);
    const numberCell0 = document.createElement('td');
    const numberCell1 = document.createElement('td');

    mealExists = checkMeal(newItemName);

    if(!mealExists.found){
    numberCell0.innerHTML = newItemNo;
    const nameCell = document.createElement('td');
    nameCell.classList.add('name-cell');
    nameCell.innerHTML = newItemName;
    const priceCell = document.createElement('td');
    priceCell.innerHTML = newItemPrice;

    totalBill += parseInt(newItemPrice);
    const delBtnCell = document.createElement('td');
    const delIcon = document.createElement('i');
    delIcon.classList.add('fas', 'fa-trash-alt', 'deleteOrderItem');
    delIcon.addEventListener('click', deleteOrderItem);
    delBtnCell.appendChild(delIcon);
    const newRow = document.createElement('tr');
    newRow.appendChild(nameCell);
    newRow.appendChild(numberCell0);
    newRow.appendChild(numberCell1);
    newRow.appendChild(priceCell);
    newRow.appendChild(delBtnCell);
    orderTable.appendChild(newRow);

    document.getElementById('total-cell').innerHTML = '#' + getTotalBill();
    } else{
      let currentRow = orderTable.children[mealExists.index];
      count = parseInt(currentRow.children[1].innerHTML);
      count++;
      currentRow.children[1].innerHTML = count;
      currentRow.children[2].innerHTML = count + ' x';
      currentRow.children[3].innerHTML = parseInt(newItemPrice) + parseInt(currentRow.children[3].innerHTML); 
      //totalBill += parseInt(currentRow.children[3].innerHTML);
      document.getElementById('total-cell').innerHTML = '#' + getTotalBill();

    }
    

}

const deleteButtons = document.getElementsByClassName('deleteOrderItem');

for(let i = 0; i < deleteButtons.length; i++){
  const element = deleteButtons[i];  
  element.addEventListener('click', deleteOrderItem);
}

function deleteOrderItem(){
  const iconCell = this.parentNode; 
  const iconRow = iconCell.parentNode;
  const tableDel = iconRow.parentNode; 
  const result = confirm('Are you sure you want to remove this item?');
  if(result){  
  tableDel.removeChild(iconRow);
  document.getElementById('total-cell').innerHTML = '#' + getTotalBill();
  } else return;
    
}
const CancelOrderButton = document.getElementById('cancelOrder');
  CancelOrderButton.addEventListener('click', cancelOrder);
function cancelOrder(){
  const orderTable = document.getElementById('order-table');
  orderTable.innerHTML = '';
  totalBill = 0;
  document.getElementById('total-cell').innerHTML = '#00.00';
}

function checkMeal(meal) {
  mealNames = document.getElementsByClassName('name-cell');
  let arr = [];
  for(let i=0; i<mealNames.length; i++){
    arr[i] = mealNames[i].innerHTML;
  }
  console.log(mealNames);
  let mealFound = arr.find((mealname) => mealname == meal);
  let mealFoundIndex = arr.findIndex((mealname) => mealname === meal);
  let checkResult = {found: false, index: null};
  if(mealFound) {
    checkResult.found = true;
    checkResult.index = mealFoundIndex;
    return checkResult;
  }
  else {
    checkResult.found = false;
    checkResult.index = mealFoundIndex;
    return checkResult
  }

}
function getTotalBill () {
  const len = orderTable.children.length;
  let arr = [];
  let totalBill = 0;
  for(let i=0; i<len; i++){
    arr[i] = (orderTable.children[i]).children[3].innerHTML;
    totalBill += parseInt(arr[i]);
  }
  return totalBill;
}