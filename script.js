
const form = document.getElementById("feedback-form");
const formMessage = document.getElementById("form-message");
const ageMessage = document.getElementById("age-message");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();

    formMessage.textContent = "";
    ageMessage.textContent = "";

    if (username === "" || email === "") {
        formMessage.textContent = "Please fill in both username and email.";
        return;
    }

    if (!document.getElementById("email").checkValidity()) {
        formMessage.textContent = "Please enter a valid email address.";
        return;
    }

    const birthYearText = document.getElementById("birth-year").value.trim();
    const birthYear = parseInt(birthYearText, 10);

    if (
        birthYearText === "" ||
        !/^\d{4}$/.test(birthYearText) ||
        birthYear < 1900 ||
        birthYear > 2026
    ) {
        formMessage.textContent = "Please enter a valid birth year.";
        return;
    }

    formMessage.textContent =
        "Thank you for visiting, " + username +
        "! We will contact you at " + email + ".";

    const age = 2026 - birthYear;

    if (age >= 18 && age <= 25) {
        ageMessage.textContent =
            "You are " + age +
            " years old. You qualify for the student discount!";
    } else if (age >= 60) {
        ageMessage.textContent =
            "You are " + age +
            " years old. You qualify for the senior discount!";
    } else {
        ageMessage.textContent =
            "You are " + age +
            " years old. You do not qualify for the special discount.";
    }
});


const menuRows = document.querySelectorAll(".menu-row");

menuRows.forEach(function(row) {
    row.addEventListener("mouseover", function() {
        row.style.backgroundColor = "lightgray";
    });

    row.addEventListener("mouseout", function() {
        row.style.backgroundColor = "";
    });
});


const themeButton = document.getElementById("theme-button");

themeButton.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});


const menuItems = document.querySelectorAll(".menu-item");
const total = document.getElementById("total");

menuItems.forEach(function(item) {
    item.addEventListener("change", function() {
        let price = 0;

        menuItems.forEach(function(item) {
            if (item.checked) {
                price += Number(item.value);
            }
        });

        total.textContent = "Total: $" + price;
    });
});


const readMoreButton = document.getElementById("read-more-button");
const extraText = document.getElementById("extra-text");

readMoreButton.addEventListener("click", function() {
    if (extraText.hidden) {
        extraText.hidden = false;
        readMoreButton.textContent = "Read Less";
    } else {
        extraText.hidden = true;
        readMoreButton.textContent = "Read More";
    }
});


const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        const category = button.dataset.category;

        filterButtons.forEach(function(filter) {
            filter.classList.remove("active");
        });

        button.classList.add("active");

        menuRows.forEach(function(row) {
            if (category === "All" || row.dataset.category === category) {
                row.style.display = "";
            } else {
                row.style.display = "none";
            }
        });
    });
});


const status = document.getElementById("status");
const currentHour = new Date().getHours();

if (currentHour >= 8 && currentHour < 22) {
    status.textContent = "We are Open!";
    status.style.color = "green";
} else {
    status.textContent = "Closed - Open at 8 AM";
    status.style.color = "red";
}


const specialNotes = document.getElementById("special-notes");
const characterCount = document.getElementById("character-count");

specialNotes.addEventListener("input", function() {
    const remaining = 100 - specialNotes.value.length;
    characterCount.textContent = remaining + " characters remaining";
});