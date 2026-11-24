// This gives the maximum and minimum number of people that can book for once session
function updatePeople() {

    // Get the IDs of selected session box & People box
    const session = document.getElementById("session").value;
    const people = document.getElementById("people");

    // create limits for the number of people for the selected session
    const limits = {
        group: { min: 1, max: 8 },
        private: { min: 1, max: 2 },
        family: { min:1, max:8 },
    }

    // Checks wether the selected session has a limit
    if (limits[session]) {
        /*
            Set min, max limits of people

            clears any current numbers entered

            Enables the People box, 
            so the user can enter their number
        */
        people.min = limits[session].min;
        people.max = limits[session].max;

        people.value = "";
        people.disabled = false;
    } else {
        /* 
            clear People box & disable the box 
            ( So a number cannot be entered )
        */
        people.value = "";
        people.disabled = true;
    }
}

// The reciept shown once the options have been selected
function reciept() {

    // Get the IDs of selected session box & People box
    const session = document.getElementById("session").value;
    const people = document.getElementById("people");
    const name = document.getElementById("name").value;
    
    const message = `Thank you ${name}!`;
    const discount = 0.9;

    const reciept = "";
    const cost = 0;
    const price = {
        group: { cost : 35 },
        private: { cost : 65  },
        family: { cost : 30 },
    }

    if (session === "group" || session === "family") {
        if (people >= 5) {
            message = ` 10% ${session} discount.`;
            price = 35 * discount
        }
    } else if (session === private ) {
        a
    }

}