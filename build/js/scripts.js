// Custom Scripts
// Custom scripts
const modalBtn1 = document.querySelector('#modal1-btn');
const modal1 = document.querySelector('#modal1');
const modalBtn2 = document.querySelector('#modal2-btn');
const modal2 = document.querySelector('#modal2');
const close = document.querySelectorAll('.order-close');
const body = document.querySelector('body');




close.forEach(function(closeBtn) {
    closeBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        modal1.classList.remove('active');
        modal2.classList.remove('active');
        body.classList.remove('active');
    });
});



modalBtn1.addEventListener('click', function (e) {
    e.stopPropagation(); 
    modal1.classList.add('active');
    body.classList.add('active');
});

modalBtn2.addEventListener('click', function (e) {
    e.stopPropagation(); 
    modal2.classList.add('active');
    body.classList.add('active');
});


document.body.addEventListener('click', function (e) {
    if (body.classList.contains('active') && !modal1.contains(e.target) && !modal2.contains(e.target)) {
        modal1.classList.remove('active');
        modal2.classList.remove('active');
        body.classList.remove('active');
    }
});
