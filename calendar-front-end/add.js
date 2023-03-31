const usernameInput = document.getElementById("username");
const teacherInput = document.getElementById("teacher");
const subjectInput = document.getElementById("subject");
const dateInput = document.getElementById("date");
const descriptionInput = document.getElementById("description");
const btn = document.getElementById("btn");


function myFunction() {
    var x = document.getElementById("ciao");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

// CREA
btn.addEventListener("click", () => {
    const username = usernameInput.value;
    const teacher = teacherInput.value;
    const subject = subjectInput.value;
    const date = dateInput.value;
    const description = descriptionInput.value;

    axios.post("http://localhost:3000/eventi",
        {
            username: username,
            teacher: teacher,
            subject: subject,
            date: date,
            description: description
        })
        .then((response) => {
            console.log(response);
        });
});
