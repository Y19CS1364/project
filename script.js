document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");
    const registrationForm = document.getElementById("registration-form");
    const loginButton = document.getElementById("login-button");
    const registrationButton = document.getElementById("registration-button");

    loginButton.addEventListener("click", function() {
        loginForm.classList.add("active");
        registrationForm.classList.remove("active");
    });

    registrationButton.addEventListener("click", function() {
        registrationForm.classList.add("active");
        loginForm.classList.remove("active");
    });
});
// Existing JavaScript code

document.addEventListener("DOMContentLoaded", function() {
    // Pagination logic
    const properties = [...document.getElementsByClassName("property")];
    const itemsPerPage = 5;
    let currentPage = 1;

    function displayProperties() {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        properties.forEach((property, index) => {
            if (index >= startIndex && index < endIndex) {
                property.style.display = "block";
            } else {
                property.style.display = "none";
            }
        });
    }

    function updatePagination() {
        const totalPages = Math.ceil(properties.length / itemsPerPage);
        let paginationHTML = "";
        for (let i = 1; i <= totalPages; i++) {
            paginationHTML += `<a href="#" class="${currentPage === i ? 'active' : ''}" onclick="changePage(${i})">${i}</a>`;
        }
        document.getElementById("pagination").innerHTML = paginationHTML;
    }

    function changePage(pageNumber) {
        currentPage = pageNumber;
        displayProperties();
        updatePagination();
    }

    displayProperties();
    updatePagination();

    // Like button logic
    const likeButtons = [...document.getElementsByClassName("like-button")];

    likeButtons.forEach(button => {
        button.addEventListener("click", function() {
            button.classList.toggle("active");
            // Implement logic to track likes
        });
    });

    // I'm Interested button logic
    const interestedButtons = [...document.getElementsByClassName("interested-button")];

    interestedButtons.forEach(button => {
        button.addEventListener("click", function() {
            // Implement logic to show seller's contact details
            // and send email to seller
        });
    });
});
