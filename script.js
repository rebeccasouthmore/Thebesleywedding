
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


});

