document.addEventListener('DOMContentLoaded', function() {
  var myButton = document.getElementById('testButton1');
  myButton.addEventListener('click', function() {
    getProfInfo();
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var myButton = document.getElementById('testButton2');
  myButton.addEventListener('click', function() {
    getAllCourses();
  });
});

function getProfInfo() {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://www.ratemyprofessors.com/professor/2603846", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

function getAllCourses() {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://calendar.carleton.ca/undergrad/courses/COMP/", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}