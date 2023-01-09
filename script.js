// function that only runs if the DOM is loaded
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
  
  
  // calling dayjs current time and saving it to var current day
  var currentDay = dayjs().format('dddd, MMMM, Do');
  // making the header equal current day
  $('#currentDay').text(currentDay);


  // grabbing the current hour from dayjs in the single hour format
  let currentTime = dayjs().format('ha');
  // setting some empty variables for the index position of the current time id and an 
  // empty array to add the slots that do not match the current time to.
  let currentPosition;
  let doesntEqualTime = [];
  // loop through all of the time block slots
  for (var i = 0; i < timeBlock.length; i ++){
    // for the index position of time slot
    var timeBlockPos = timeBlock[i];
    // for the attribute id of each time block index
    var timeBlockPosAttr = $(timeBlock[i]).attr('id');
    // if the current time does not equal the attribute for the current position, add it to
    // the empty array
    if (currentTime != timeBlockPosAttr){
      doesntEqualTime.push(i);
    };
    // if the current time does equal the time block id in the array, set the class attr
    // to present and save the current position to a variable
    if (currentTime == timeBlockPosAttr){
      $(timeBlockPos).addClass('present');
      currentPosition = i;
    };
  }
  // loop through the doesnt equal time array
  for (var i = 0; i <doesntEqualTime.length; i ++){
    // if the doesnt equal time position in the array is less than the current time position
    // in the array, set those position id's to the past
    if (doesntEqualTime[i] < currentPosition){
      var peeper = doesntEqualTime[i];
     $(timeBlock[peeper]).addClass('past');
    //  else if they are more than the current position, set them equal to the future
    } else if (doesntEqualTime[i] > currentPosition){
      var peeper = doesntEqualTime[i];
      $(timeBlock[peeper]).addClass('future');
    };
    };
});
