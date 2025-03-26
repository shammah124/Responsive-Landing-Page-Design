let hamburgerBtn = document.querySelector(".hamburger");
let mobileBox = document.querySelector(".mobile-box");
let barIcon = document.querySelector("#bars");
let xIcon = document.querySelector("#x-mark")

let isHamburgerBtnToggle = false;

hamburgerBtn.addEventListener("click", function () {
    if (!isHamburgerBtnToggle) {
        mobileBox.style.display = "block";
        barIcon.style.display = "none"
        xIcon.style.display = "block"
        isHamburgerBtnToggle = true
    }
    else if (isHamburgerBtnToggle) {
        mobileBox.style.display = "none";
        xIcon.style.display = "none"
        barIcon.style.display = "block"
        isHamburgerBtnToggle = false
    }
});
