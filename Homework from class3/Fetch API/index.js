document.getElementById("fetchUser").addEventListener("click", function () {
    fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(function (response) {
        console.log(response);
        response.json()
            .then(function (user) {
                const table = document.getElementById("userTable");
                    const tbody = table.querySelector("tbody");
                    tbody.innerHTML = ""; 
                    for (const [key, value] of Object.entries(user)) {
                        const row = document.createElement("tr");
                        const keyCell = document.createElement("td");
                        const valueCell = document.createElement("td");

                        keyCell.textContent = key;
                        valueCell.textContent =
                            typeof value === "object" ? JSON.stringify(value, null, 2) : value;

                        row.appendChild(keyCell);
                        row.appendChild(valueCell);
                        tbody.appendChild(row);
                    }

                    table.style.display = "table"; 
                })
                
            .catch(function (errorParse) {
                console.log(errorParse);
            })
    })
        .catch(function (errorParse) {
            console.log(errorParse);
        })

});