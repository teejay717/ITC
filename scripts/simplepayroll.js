const button = document.querySelector(".add-button");
const employeeName = document.getElementById("")
button.addEventListener("click", addToPayroll);


function addToPayroll() {
    let employeeInfo = {
        name:
        daysWorked:
        dailyRate:
        grossPay:
        deduction:
    }
}

document.querySelector(".table").innerHTML = `<table>
        <tr>
            <th>No.</th>
            <th>Employee Name</th>
            <th>Days Worked</th>
            <th>Daily Rate</th>
            <th>Gross Pay</th>
            <th>Deduction</th>
            <th>Net Pay</th>
        </tr>
        <tr>
            <td>1</td>
            <td>2</td>
            <td>3232</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
        </tr>
        <tr>
            <td>Total</td>
            <td>Gross Pay</td>
        </tr>
    </table>`