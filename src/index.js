import "./style.css"
import "bootstrap/dist/css/bootstrap.css"

const URL =  "http://localhost:8080/ChristofferCA1_war_exploded/api/xxx/person/all"

fetch(URL)
.then(res=>res.json())
.then(data=> {
    const persons = data.all;
    const tableRows = persons.map(person => `
        <tr>
            <td>${person.id}</td>
            <td>${person.email}</td>
            <td>${person.firstName}</td>
            <td>${person.lastName}</td>
        </tr>
        `)
const tableRowsAsStr = tableRows.join("");
document.getElementById("tbody").innerHTML = tableRowsAsStr
})
