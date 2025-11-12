const button = document.querySelector(".add-button");
const deleteButton = document.querySelector(".delete-button");
let table = [];

button.addEventListener("click", addToPayroll);
deleteButton.addEventListener("click", deleteEmployee);

function initTable() {
    table = [];
    document.querySelector(".table").innerHTML = "";
}

function clearTable() {
    initTable();
}

function addToPayroll() {
    const employeeName = document.getElementById("employeeName").value;
    const daysWorked = document.getElementById("daysWorked").value;
    const dailyRate = document.getElementById("dailyRate").value;
    const deduction = document.getElementById("deduction").value;

    if (!employeeName || !daysWorked || !dailyRate || !deduction) {
        alert("Incomplete info. Please Try Again");
    } else {

    let employeeInfo = {
        "name": employeeName,
        "daysWorked": daysWorked,
        "dailyRate": dailyRate,
        "deduction": deduction
    }

    table.push(employeeInfo);
    showPayroll();
}
}

function deleteEmployee() {
    let deleteEmployee = document.querySelector(".employee-number").value;

    if (deleteEmployee <= 0 || deleteEmployee > table.length) {
        alert("Invalid Employee Number");
        document.querySelector(".employee-number").value = '';
    } else {
    table.splice(deleteEmployee - 1, 1);
    showPayroll();
    }
}

function showPayroll() {
    const thead = `
        <thead>
            <tr>
            <th>No.</th>
            <th>Employee Name</th>
            <th>Days Worked</th>
            <th>Daily Rate</th>
            <th>Gross Pay</th>
            <th>Deduction</th>
            <th>Net Pay</th>
        </tr>
        </thead>`;
    let tbody = '';
    let totalNetPay = 0; // Initialize total
    
    for (let i = 0; i < table.length; i++) {
        const employee = table[i];
        const grossPay = employee.daysWorked * employee.dailyRate;
        const netPay = grossPay - employee.deduction;
        
        totalNetPay += netPay;

    tbody += `<tr>
            <td>${i+1}</td>
            <td>${employee.name}</td>
            <td>${employee.daysWorked}</td>
            <td>${employee.dailyRate}</td>
            <td>${grossPay}</td>
            <td>${employee.deduction}</td>  
            <td>${netPay}</td>
            </tr>`;
    }

    let tfooter = `
        <tfoot>
            <tr>
                <th class="footer" colspan='5'>Total Net Pay</th>
                <th class="footer" colspan='2'>${totalNetPay}</th>
            </tr>
        </tfoot>
    `

    document.querySelector(".table").innerHTML = `<table>
    ${thead}<tbody>${tbody}</tbody>${tfooter}</table>`;
    
}

showPayroll();