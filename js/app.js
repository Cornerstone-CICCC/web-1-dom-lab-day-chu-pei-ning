const form = document.querySelector("#form")
const employees = document.querySelector('#employeeList')


//email only @canada.ca
email.pattern = ".*@canada\.ca"
email.title = 'Only canada.ca employees can register'

form.addEventListener("submit", (event) =>{
      event.preventDefault() //stop the form from  refreshing the page

      const formData = new FormData(form); //capture all form fields
      //收集表單數據
      const firstName = formData.get('firstname')
      const lastName = formData.get('lastname') 
      const email = formData.get('email')
      const hireDate = formData.get('hire_date')
      const photo = formData.get('photo').name

      
      const tableRow = document.createElement('tr')
      tableRow.innerHTML = `
            <td><img src="./images/${photo}"></td>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${email}</td>
            <td>${hireDate}</td>
      `
      
      // creat delete button
      const actionCell = document.createElement('td');
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener("click", () => {
            if (confirm('Are you sure you want to delete this employee?') === true) {
                  tableRow.remove()
            }
      })
      actionCell.appendChild(deleteButton);
      tableRow.appendChild(actionCell);

      employees.appendChild(tableRow) // put tableRow in employeeList         
})