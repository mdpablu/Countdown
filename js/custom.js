  //get elements from html:
  var year = document.getElementById('year');

  var days = document.getElementById('days');
  var hours = document.getElementById('hours');
  var minutes = document.getElementById('minutes');
  var seconds = document.getElementById('seconds');
  
  //get next year and current year;
  var currentYear = new Date().getFullYear();
  var nextYear = new Date(`January 01 ${currentYear + 1} 00:00:00`);
  
  
  //create function;
  function countTimer(){
    var currentTime = new Date(); 
    var diff = nextYear -  currentTime;
    var d = Math.floor(diff/1000 / 60 / 60 /24);
    var h = Math.floor(diff/1000 / 60 / 60 ) % 24;
    var m = Math.floor(diff/1000 / 60 ) % 60;
    var s = Math.floor(diff/1000 ) % 60;
    
    //write in html
    seconds.innerHTML = s <10 ? '0' + s : s;
    minutes.innerHTML = m <10 ? '0' + m : m;
    hours.innerHTML = h <10 ? '0' + h : h;
    days.innerHTML = d <10 ? '0' + d : d;
  }


  //Browser update every seconds

  setInterval(countTimer,1000)

  //print the year html;
  year.innerHTML = nextYear.getFullYear();
   
   