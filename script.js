let call = document.getElementsByClassName("bhga")
for (let i = 0; i < call.length; i++) {

    call[i].addEventListener("click", (event) => {

        event.target.style.color = '#0066ff'
        event.target.style.borderRadius = "1rem"

    })
    call[i].addEventListener("mouseout", (event) => {
        event.target.style.color = "white"
        event.target.style.borderRadius = ""
    })
    // console.log("hey there");

}
