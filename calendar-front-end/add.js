
const idInput = document.getElementById("ID");
const usernameInput = document.getElementById("username");
const teacherInput = document.getElementById("teacher");
const subjectInput = document.getElementById("subject");
const dateInput = document.getElementById("date");
const descriptionInput = document.getElementById("description");
const btn = document.getElementById("btn");
const btnDelete = document.getElementById("btnDelete");

// DATI
let content = [{
    "id": 2,
    "username": "Joseph",
    "teacher": "Renzi",
    "subject": "Inglese",
    "date": "2023-03-30",
    "description": "Test di Inglese sul Past Simple"
},
{
    "id": 3,
    "username": "Eva",
    "teacher": "Filippo",
    "subject": "Scienze",
    "date": "2063-02-14",
    "description": "Verifica su COVID 2019"
},
{
    "id": 4,
    "username": "Leo",
    "teacher": "Cipolla",
    "subject": "Sistemi e Reti",
    "date": "2023-03-31",
    "description": "Sistemi E Reti bisogna fare un sistema cisco "
},
{
    "id": 7,
    "username": "Nicole",
    "teacher": "Carlos",
    "subject": "Spagnolo",
    "date": "2023-12-12",
    "description": "Viaggio in spagna con tema su Madrid"
},
{
    "id": 23,
    "username": "Hope",
    "teacher": "Carlos",
    "subject": "Spagnolo",
    "date": "2023-04-04",
    "description": "Verifica di spagnolo dopo il viaggio in spagna"
},
{
    "id": 24,
    "username": "Hope",
    "teacher": "Renzi",
    "subject": "Inglese",
    "date": "2023-06-05",
    "description": "Verifica sulle preposizioni"
}
]

function getEventi() {
    Promise.resolve(content)
    // axios.get('http://localhost:3000/dataTable').then(res => res.json())
        .then(data => {
            var tableContent = document.querySelector('#myTable > tbody');
            data.map(function (instance) {
                const row = document.createElement('tr');
                console.log("funziona")
                for (let c of ['id', 'username', 'teacher', 'subject', 'date', 'description']) {
                    let cell = document.createElement('td');
                    if (instance.hasOwnProperty(c)) {
                        cell.innerText = instance[c]
                    }

                    row.appendChild(cell)
                }

                tableContent.appendChild(row)
            });
        })
} 
getEventi()

// btn
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

// myHide
function myHide() {
    var x = document.getElementById("agenda");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

//btnDelete
btnDelete.addEventListener("click", () => {
    const id = idInput.value;
    const username = usernameInput.value;
    const teacher = teacherInput.value;
    const subject = subjectInput.value;

    axios.delete("http://localhost:3000/eventi",
        {
            id: id,
            username: username,
            teacher: teacher,
            subject: subject,
        })
        .then((response) => {
            console.log(response);
        });
});

// myHideDelete
function myHideRemove() {
    var x = document.getElementById("delete");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
};