
let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}

function plusSlides(n) {
    slideIndex += n - 1;
    let slides = document.getElementsByClassName("slide");
    if (slideIndex >= slides.length) {slideIndex = 0}
    if (slideIndex < 0) {slideIndex = slides.length - 1}
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}

document.addEventListener("DOMContentLoaded", function() {
    
    showSlides();
});

// for services
function navigateToPage(page) {
    window.location.href = page;
}
function subscribe() {
    var email = document.getElementById("email").value;
    if(email) {
        alert("Subscribed successfully with " + email);
    } else {
        alert("Please enter a valid email address.");
    }
}
//for categories dropdownbtn
document.getElementById("categoryBtn").addEventListener("click", function() {
    document.getElementById("categoryDropdown").classList.toggle("show");
});

window.addEventListener("click", function(event) {
    if (!event.target.matches(".dropbtn")) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains("show")) {
                openDropdown.classList.remove("show");
            }
        }
    }
});

//login/registor
function toggleForm() {
    let loginForm = document.getElementById("login-form");
    let registerForm = document.getElementById("register-form");
    let formTitle = document.getElementById("form-title");

    if (loginForm.style.display === "none") {
        loginForm.style.display = "block";
        registerForm.style.display = "none";
        formTitle.innerText = "Login";
    } else {
        loginForm.style.display = "none";
        registerForm.style.display = "block";
        formTitle.innerText = "Register";
    }
}

// Basic Form Validation
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let email = document.getElementById("login-email").value;
    let password = document.getElementById("login-password").value;

    if (email === "" || password === "") {
        alert("Please fill in all fields!");
    } else {
        alert("Login Successful!");
    }
});

document.getElementById("register-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("register-name").value;
    let email = document.getElementById("register-email").value;
    let password = document.getElementById("register-password").value;

    if (name === "" || email === "" || password === "") {
        alert("Please fill in all fields!");
    } else {
        alert("Registration Successful!");
    }
});



document.querySelectorAll('.footer-section a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        alert('Redirecting to: ' + this.textContent);
        window.location.href = this.href;
    });
});


//mycart
function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart!");
}