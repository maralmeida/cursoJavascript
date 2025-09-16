const submitButton=document.getElementById('submitBtn'); 

submitButton.onclick = submitFeedback; // creo evento al clickear, mostrar la info ingresada por user

function submitFeedback() {
    //asigno el valor ingresado en el html a las variables js
    const username = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;
    
    
    //muestro las variables con su el valor dentro de los labels del html
    document.getElementById('userName').innerHTML = username;
    document.getElementById('userAge').innerHTML = age;
    document.getElementById('userEmail').innerHTML = email;
    document.getElementById('userJob').innerHTML = job;
    document.getElementById('userDesignation').innerHTML = designation;
    document.getElementById('userProductChoice').innerHTML = productType;
    document.getElementById('userFeedback').innerHTML = feedback;
    
    alert('Thank you for your valuable feedback')
    document.getElementById('userInfo').style.display = 'block';
    
}

//evento para ingresar info si es que se presiona enter y no el botón
document.addEventListener('keydown', function(event) {
   if (event.key === 'Enter') {
     submitFeedback();
   }
 });
