// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

// save all the button classes to a variable
 var btnDivClass = $(".btn");
//  event listener for the button class 
 btnDivClass.on('click', function(){
  // saving the id of the div parent of the button you clicked, IE: hour-9 hour-10
  var timeBlock = $(this).parents('div').attr('id');
  // saving the content of the sibling box next to the save button
  var scheduleContent = $(this).siblings('.description').val();
  // setting the saved contents to local storage with the timeBlock being the key and the schedule content being the value
  localStorage.setItem(timeBlock, scheduleContent);
  });

  // targetting the div "time-block-container's" chilldren elements with the class row to use that as a loop.
  var timeBlock = $('#time-block-container').children('.row');
  
  
  // for the amount of areas in time block
  for (var i = 0; i < timeBlock.length; i++){
    // get the current positions attribute id
    var timeBlockPos = $(timeBlock[i]).attr('id');
    // get the value from storage using the attribute as the key
    var whatsInStorage =localStorage.getItem(timeBlockPos);
    // set the current positions child, text area to the value found from storage
    $(timeBlock[i]).children("textarea").val(whatsInStorage);
  }

  var time = dayjs().format('h');

  console.log(time);


  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  
  
  // TODO: Add code to display the current date in the header of the page.
  var currentDay = dayjs().format('dddd, MMMM, Do');
  $('')
});
