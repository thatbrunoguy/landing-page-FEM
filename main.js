window.onload = function () {
    window.addEventListener('scroll', function(e) {
        if (window.pageYOffset > 100) {
            document.querySelector("header").classList.add("is-scrolling");
        } else {
            document.querySelector("header").classList.remove('is-scrolling');
        }
    });

    const menu_btn = document.querySelector('.ham');
    const mobile_menu = document.querySelector('.main-ul');

    menu_btn.addEventListener('click', function () {
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
    });
        
    var dropdown = document.getElementsByClassName("dropdown-btn");
    var i;

    for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "flex") {
        dropdownContent.style.display = "none";
        } else {
        dropdownContent.style.display = "flex";
        }
    });
    }
}
