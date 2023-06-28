// --- Functions

// --- Event listeners
document.addEventListener('DOMContentLoaded', function() {
  var myButton = document.getElementById('testButton1');
  myButton.addEventListener('click', function() {
    handleGetProfInfo();
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var myButton = document.getElementById('testButton2');
  myButton.addEventListener('click', function() {
    handleGetAllCourses();
  });
});

// --- Event handlers
function handleGetProfInfo() {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://www.ratemyprofessors.com/professor/2603846", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

function handleGetAllCourses() {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://calendar.carleton.ca/undergrad/courses/COMP/", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}