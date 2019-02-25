
let paySwitch = false;

let payNowButton = document.getElementById('pay-now');
let payLaterButton = document.getElementById('pay-later');
let payBox = document.getElementById('cash-pay-box');

payNowButton.onclick = () => {
    payBox.style.display = 'initial';
    paySwitch = true;
}
payLaterButton.onclick = () => {
    if(paySwitch) {
        payBox.style.display = 'none';
        paySwitch = false;
    }
}
