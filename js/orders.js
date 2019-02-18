var addToOrderElements = document.getElementsByClassName('addToOrder');

for(var i = 0; i < addToOrderElements.length; i++){
  var element = addToOrderElements[i];  
  element.addEventListener('click', addToOrder);
}
var itemIndex = 0;
var totalBill = 0;

function addToOrder(){
    itemIndex++;
    var addToOrder = this;
    var buttonOverlay = this.parentNode;
    //console.log(buttonOverlay);
    var buttonDiv = buttonOverlay.parentNode;
    var orderTable = document.getElementById('order-table');

    var newItemNo = itemIndex;
    var newItemName = buttonDiv.children[2].innerHTML;
    var newItemPrice = buttonDiv.children[3].innerHTML;
    var numberCell = document.createElement('td');
    numberCell.innerHTML = newItemNo;
    var nameCell = document.createElement('td');
    nameCell.innerHTML = newItemName;
    var priceCell = document.createElement('td');
    priceCell.innerHTML = newItemPrice;

    totalBill += parseInt(newItemPrice.slice(1));
    var delBtnCell = document.createElement('td');
    var delIcon = document.createElement('i');
    delIcon.classList.add('fas', 'fa-trash-alt', 'deleteOrderItem');
    delBtnCell.appendChild(delIcon);
    var newRow = document.createElement('tr');
    newRow.appendChild(numberCell);
    newRow.appendChild(nameCell);
    newRow.appendChild(priceCell);
    newRow.appendChild(delBtnCell);
    orderTable.appendChild(newRow);

    document.getElementById('total-cell').innerHTML = '#' + totalBill;

}

var deleteButtons = document.getElementsByClassName('deleteOrderItem');

for(var i = 0; i < deleteButtons.length; i++){
  var element = deleteButtons[i];  
  element.addEventListener('click', deleteOrderItem);
}

function deleteOrderItem(){
  var iconCell = this.parentNode; 
  var iconRow = iconCell.parentNode;
  var tableDel = iconRow.parentNode; 
  var result = confirm('Are you sure you want to remove this item?');
  if(result){  
  tableDel.removeChild(iconRow);
  } else return;
    
}
var CancelOrderButton = document.getElementById('cancelOrder');
  CancelOrderButton.addEventListener('click', cancelOrder);
function cancelOrder(){
  var orderTable = document.getElementById('order-table');
  orderTable.innerHTML = '';
}

