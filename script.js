
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

if (guestName) {

    const savedGuest = localStorage.getItem("currentGuest");

    if (savedGuest) {

        const guest = JSON.parse(savedGuest);

guestName.textContent = guest.guests[0].name;
    }

}


const guestList = document.querySelector("#guestList");

if (guestList) {

    const savedGuest = localStorage.getItem("currentGuest");

    if (savedGuest) {

        const guest = JSON.parse(savedGuest);

        guest.guests.forEach(person => {

            const guestCard = document.createElement("div");

            guestCard.className = "guest-card";

            guestCard.innerHTML = `

                <h2>${person.name}</h2>

                <label>
                    <input type="radio" name="${person.name}-attendance">
                    Delighted to attend
                </label>

                <label>
                    <input type="radio" name="${person.name}-attendance">
                    Unable to attend
                </label>

                <br><br>

                <label>
                    Meal choice:
                </label>

                <select>
                    <option>Meat</option>
                    <option>Vegan</option>
                </select>

                <br><br>

                <label>
                    Dietary requirements:
                </label>

                <textarea></textarea>

            `;

            guestList.appendChild(guestCard);

        });

    }

}

});