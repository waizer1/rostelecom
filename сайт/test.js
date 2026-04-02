var overlay = document.getElementById('overlay');
var modal1 = document.getElementById('modal1');
var modal2 = document.getElementById('modal2');

document.getElementById('b1').onclick = function() {
    overlay.classList.add('active');
    modal1.classList.add('active');
};

document.getElementById('b2').onclick = function() {
    overlay.classList.add('active');
    modal2.classList.add('active');
};

function closeModal() {
    overlay.classList.remove('active');
    modal1.classList.remove('active');
    modal2.classList.remove('active');
}

overlay.onclick = closeModal;