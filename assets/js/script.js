var thisDay = dayjs();
var todayTime = document.querySelector("#currentTime");  
var displayDate = document.querySelector("#currentDay");
var localDesc = document.querySelector(".description");  
var btnClick = $('.saveBtn');

// After page loads...
$(document).ready(function () {
  // ...display current date... 
  displayDate.textContent = thisDay.format('MMMM DD, YYYY');
  // ...and time...
  var timeInterval = setInterval (function() {
    var thisDay = dayjs();
    todayTime.textContent = thisDay.format("hh:mm:ss a");
    
  }, 1000);

  // get current hour and format it to match our div IDs
  var nowHour = thisDay.format('[hour-]HH');
  
  // For each hour block
  $(".time-block").each(function() {
    var hourBlock = $(this).attr("id")
    // Retrieve any notes from local storage for the current hour block
    var commentBlock = localStorage.getItem($(this).attr("id"));
    if (nowHour > hourBlock){
      // if current hour block is in the past
      // assign 'past' class and add any notes from local storage
      $(this).removeClass("future");
      $(this).removeClass("present");
      $(this).addClass("past");
      $(this).children(".description").val(commentBlock);
      
    }
    // if current hour block is the current hour
    // assign 'present' class and add any notes from local storage
    else if (nowHour === hourBlock){
      $(this).removeClass("future");
      $(this).removeClass("past");
      $(this).addClass("present");
      $(this).children(".description").val(commentBlock);
    }
    else {
      // if current hour block is in the future
      // assign 'future' class and add any notes from local storage
      $(this).removeClass("past");
    $(this).removeClass("present");
    $(this).addClass("future");
    $(this).children(".description").val(commentBlock);
    }
  });

    // when any save button is pressed
  btnClick.on("click", function(){
    //add the corresponding hour and notes to local storage
   var appTime = $(this).parent().attr("id");
   var apptText = $(this).siblings(".description").val();
    console.log(appTime);
    console.log(apptText);
   localStorage.setItem(appTime,apptText);
   
  })   
 });