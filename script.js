document.addEventListener("DOMContentLoaded", function() {
    const boxes = document.querySelectorAll('.box');

    boxes.forEach(function(box) {
        box.addEventListener('click', function() {
            alert(box.textContent);
        });
    });
});
