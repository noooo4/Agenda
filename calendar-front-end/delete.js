
const usernameInput = document.getElementById("username");
const btn = document.getElementById("btn");

function myDelete() {
    location.replace('./add.html')
}

btn.addEventListener("click", () => {
    const username = usernameInput.value;

    axios.delete("http://localhost:3000/delete/:username",
        {
            username: username
        })

        .then((response) => {
            myDelete(response);
        });
});
