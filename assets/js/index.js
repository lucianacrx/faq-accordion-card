document.addEventListener('DOMContentLoaded', function() {
    var accordions = document.getElementsByClassName("accordion");

    for (let i = 0; i < accordions.length; i++) {
        accordions[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;

            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }

            hideAll(accordions, this);
        });
    }
});

function hideAll(items, element) {
    for (var i = 0; i < items.length; i++) {
        if (items[i] !== element) {
            items[i].classList.remove("active");
            items[i].nextElementSibling.style.display = "none";
        }
    }
}