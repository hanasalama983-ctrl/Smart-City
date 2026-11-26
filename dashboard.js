// SIDEBAR MENU

const menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach(item => {

    item.addEventListener("click", function(e) {

        e.preventDefault();

        menuItems.forEach(link => {
            link.classList.remove("active");
        });

        this.classList.add("active");

    });

});


// SEARCH

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", function() {

    const value = this.value.toLowerCase();

    const alerts = document.querySelectorAll(".alert-item");

    alerts.forEach(alert => {

        const text = alert.textContent.toLowerCase();

        alert.style.display =
            text.includes(value) ? "flex" : "none";

    });

});


// QUICK ACTIONS

const actionButtons = document.querySelectorAll(".action-card");

actionButtons.forEach(button => {

    button.addEventListener("click", function() {

        const action = this.dataset.action;

        const messages = {

            parking: "Manage Parking selected",

            gate: "Open Gate selected",

            alert: "Send Alert selected",

            irrigation: "Irrigation selected"

        };

        alert(messages[action]);

    });

});