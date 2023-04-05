function myFunction() {
    let response = axios.get("http://localhost:3000/dataTable")
        .then((dataTable) => {
            console.log(dataTable);
            console.log(response);
        });
}