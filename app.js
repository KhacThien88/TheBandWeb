var buyBtns = document.querySelectorAll('.js-buy-ticket');
var getModel = document.querySelector('.model');
function openModel() {
    getModel.classList.add('open');
}
for (const buyBtn of buyBtns) {
    buyBtn.onclick = openModel
}
var getClose = document.querySelector('.ti-close');
getClose.onclick = function() {
    getModel.classList.remove('open');
}