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