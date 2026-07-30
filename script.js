
/*
Project Besley
Rebecca and Matthew
The Besley Wedding
*/


document.addEventListener("DOMContentLoaded", () => {


    const invitation = document.querySelector(".invitation");


    if (invitation) {

        invitation.style.opacity = "0";

        setTimeout(() => {

            invitation.style.transition = "opacity 1.5s ease";
            invitation.style.opacity = "1";

        }, 100);

    }



    const button = document.querySelector("#continueButton");
    const input = document.querySelector("#code");


    if (button && input) {


        button.addEventListener("click", () => {


            const code = input.value.trim().toUpperCase();


            if (code === "") {

                alert("Please enter your invitation code.");
                return;

            }


            const guest = guests.find(person => person.code === code);


            if (guest) {


                localStorage.setItem(
                    "currentGuest",
                    JSON.stringify(guest)
                );


                window.location.href = "invitation.html";


            } else {


                alert("We couldn't find that invitation code. Please check and try again.");


            }


        });


    }

const guestName = document.querySelector("#guestName");
const guestList = document.querySelector("#guestList");
const rsvpGuests = document.querySelector("#rsvpGuests");
const savedGuest = localStorage.getItem("currentGuest");

// Protect invitation and RSVP pages
if (!savedGuest && (guestName || guestList || rsvpGuests)) {
    window.location.href = "index.html";
}

const guest = savedGuest ? JSON.parse(savedGuest) : null;

// Invitation page guest name
if (guestName && guest) {

    guestName.textContent = guest.guests
        .map(person => person.name)
        .join(" & ");

}

// RSVP page guest names
if (rsvpGuests && guest) {

    rsvpGuests.textContent = guest.guests
        .map(person => person.name)
        .join(" & ");

}

// Build RSVP cards
if (guestList && guest) {

    guest.guests.forEach(person => {

        const guestCard = document.createElement("div");

        guestCard.className = "guest-card";

   guestCard.innerHTML = `

<h2>${person.name}</h2>

<div class="attendance-options">

    <label class="attendance-card">
        <input
            type="radio"
            name="${person.name}-attendance"
            value="yes">
        <span>Accepts with pleasure</span>
    </label>

    <label class="attendance-card">
        <input
            type="radio"
            name="${person.name}-attendance"
            value="no">
        <span>Regretfully declines</span>
    </label>

</div>

<div class="wedding-breakfast" style="display:none;">

    <h3>Wedding Breakfast</h3>

    <p class="menu-intro">
        One of the greatest pleasures of bringing everyone together is sharing a wonderful meal.
        Please select the menu that is most appropriate for you.
    </p>

    <div class="attendance-options">

        <label class="attendance-card">
            <input
                type="radio"
                name="${person.name}-menu"
                value="classic">

            <span>
                <strong>Classic Wedding Menu</strong><br>
                Three-course wedding breakfast with your choice of courses.
            </span>
        </label>

        <label class="attendance-card">
            <input
                type="radio"
                name="${person.name}-menu"
                value="plant">

            <span>
                <strong>Chef's Plant-Based Menu</strong><br>
                A specially prepared three-course plant-based dining experience.
            </span>
        </label>

    </div>

    <div class="classic-menu" style="display:none;">

        <h4>Classic Wedding Menu</h4>

        <p><strong>Starter</strong></p>

        <label><input type="radio" name="${person.name}-starter" value="Soup"> Homemade Leek & Potato Soup</label><br>
        <label><input type="radio" name="${person.name}-starter" value="Chicken"> Crisp Buttermilk Chicken</label>

        <p><strong>Main</strong></p>

        <label><input type="radio" name="${person.name}-main" value="Chicken Supreme"> Roast Chicken Supreme</label><br>
        <label><input type="radio" name="${person.name}-main" value="Roast Beef"> Slow-Cooked Aged Roast Beef</label>

        <p><strong>Dessert</strong></p>

        <label><input type="radio" name="${person.name}-dessert" value="Chocolate Orange Torte"> Rich Chocolate Orange Torte</label><br>
        <label><input type="radio" name="${person.name}-dessert" value="Glazed Lemon Tart"> Glazed Lemon Tart</label>

    </div>

    <div class="plant-menu" style="display:none;">

        <h4>Chef's Plant-Based Menu</h4>

        <p><strong>Starter</strong></p>
        <p>Heritage Tomatoes with Italian Seasoning on Sourdough Bruschetta</p>

        <p><strong>Main</strong></p>
        <p>Sweet Potato, Provençal Vegetables & Vegan Halloumi Layer</p>

        <p><strong>Dessert</strong></p>
        <p>Vegan Chocolate Brownie</p>

    </div>

</div>

<div class="dietary-section">

    <label class="field-label">
        Allergies or Additional Dietary Requirements
    </label>

    <textarea placeholder="Please let us know of any allergies or dietary requirements."></textarea>

</div>

`;
const attendanceRadios = guestCard.querySelectorAll(
    `input[name="${person.name}-attendance"]`
);

const breakfastSection = guestCard.querySelector(".wedding-breakfast");
const dietarySection = guestCard.querySelector(".dietary-section");

const declineMessage = document.createElement("div");

declineMessage.className = "decline-message";

declineMessage.innerHTML = `
    <p><strong>We're so sorry you won't be joining us.</strong></p>

    <p>
        Thank you for letting us know.
        You'll certainly be missed and we hope
        to celebrate with you another time.
    </p>
`;

guestCard.appendChild(declineMessage);

attendanceRadios.forEach(radio => {

    radio.addEventListener("change", () => {

        if (radio.value === "yes") {

            breakfastSection.style.display = "block";
dietarySection.style.display = "block";
declineMessage.style.display = "none";

        } else {

            breakfastSection.style.display = "none";
dietarySection.style.display = "none";
declineMessage.style.display = "block";

        }

    });

});

const menuRadios = guestCard.querySelectorAll(
    `input[name="${person.name}-menu"]`
);

const classicMenu = guestCard.querySelector(".classic-menu");
const plantMenu = guestCard.querySelector(".plant-menu");

menuRadios.forEach(radio => {

    radio.addEventListener("change", () => {

        if (radio.value === "classic") {

            classicMenu.style.display = "block";
            plantMenu.style.display = "none";

        } else {

            classicMenu.style.display = "none";
            plantMenu.style.display = "block";

        }

    });

});

        guestList.appendChild(guestCard);

    });

}
    
});