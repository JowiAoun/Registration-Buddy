document.addEventListener('DOMContentLoaded', function() {
    var myButton = document.getElementById('testButton');
    myButton.addEventListener('click', function() {
      // Your event handler code here
      getAllCourses();
    });
  });
  
  function getAllCourses() {
    var myHeaders = new Headers();
    myHeaders.append("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8");
    myHeaders.append("Accept-Language", "en-CA,en;q=0.9");
    myHeaders.append("Connection", "keep-alive");
    myHeaders.append("Cookie", "IDMSESSID=D57B2A12F691BA88A9A381562149077E; TS0186ecd1=0169a0050658d019195435631025d337308a606d2e7fa4c04fed70be28ef998c821b9c61d174dcfdd2c23bdbf23c4b9a6b5c4412f13b748ff46d1faa5d2325d0d0aaf450fe60513bae3f74d7b8999055f2311a7feb");
    myHeaders.append("If-Modified-Since", "Wed, 21 Jun 2023 18:39:48 GMT");
    myHeaders.append("If-None-Match", "\"2613a-5fea817aefcb4\"");
    myHeaders.append("Sec-Fetch-Dest", "document");
    myHeaders.append("Sec-Fetch-Mode", "navigate");
    myHeaders.append("Sec-Fetch-Site", "none");
    myHeaders.append("Sec-Fetch-User", "?1");
    myHeaders.append("Sec-GPC", "1");
    myHeaders.append("Upgrade-Insecure-Requests", "1");
    myHeaders.append("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36");
    myHeaders.append("sec-ch-ua", "\"Not.A/Brand\";v=\"8\", \"Chromium\";v=\"114\", \"Brave\";v=\"114\"");
    myHeaders.append("sec-ch-ua-mobile", "?0");
    myHeaders.append("sec-ch-ua-platform", "\"Windows\"");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch("https://calendar.carleton.ca/undergrad/courses/AERO/", requestOptions)
      .then(function(response) {
        if (response.ok) {
          return response.text();
        }
        throw new Error('Network response was not ok.');
      })
      .then(function(data) {
        // Process the data here
        console.log("Success!");
      })
      .catch(function(error) {
        // Handle any error that occurred during the request
        console.log(error);
      });
  }