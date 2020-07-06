var position = 1;     // Defines the index position.
var name = "";        // Will hold the name once filled in.
var email = "";       // Will hold the email once filled in.
var companyName = ""; // Will hold the company name once filled in.
var website = "";     // Will hold the website once filled in.
var projectType = ""; // Will hold the project type once filled in.
var budget = "";      // Will hold the budget once filled in.
var description = ""; // Will hold the description once filled in.

// When clicking the next button...
$("#next-button").click(function() {
  // Log the current position
  console.log("Current position is: " + position);
  // Increment the position
  position++;
  // Log the new position
  console.log("Incremented to: " + position);
  // Animate scrolling to the slide with the index of position
  $('html, body').animate({
    scrollTop: $(".slide:nth-child("+position+")").offset().top
  }, 1000);
  // ZOMG!!1!! it worked.
  console.log("Scroll function complete.");
  // If the position is 4
  if (position === 4) {
    // Disable the next button
    $("#next-button").prop("disabled",false);
    $("#next-button").addClass("disabled");
  }
  // If the position is 2
  if (position === 2) {
    // Enable the back button
    $("#back-button").prop("disabled",false);
    $("#back-button").removeClass("disabled");
  }
});

// Same as above but backwards.
$("#back-button").click(function() {
  position--;
  $('html, body').animate({
    scrollTop: $(".slide:nth-child("+position+")").offset().top
  }, 1000);
  if (position === 1) {
    $("#back-button").prop("disabled",true);
    $("#back-button").addClass("disabled");
  }
  if (position === 3) {
    $("#next-button").prop("disabled",false);
    $("#next-button").removeClass("disabled");
  }
});

// Submit button functionality -- There is NO validation attached to this right now.
$("#submit-button").click(function() {

  if (!$("form#project-proposal").checkValidity) {
    position = 2;
    $('html, body').animate({
      scrollTop: $(".slide:nth-child("+position+")").offset().top
    }, 1000);
    $("#next-button").prop("disabled",false);
    $("#next-button").removeClass("disabled");
  } else {
    // Grab variables from form
    name = $("#name").val();
    email = $("#email").val();
    companyName = $("#companName").val();
    website = $("#website").val();
    projectType = $("#projectType").val();
    budget = $("#budget").val();
    description = $("#description").val();

    // Log the variables that were grabbed
    console.log("NAME: " + name);
    console.log("EMAIL: " + email);
    console.log("COMPANY NAME: " + companyName);
    console.log("WEBSITE: " + website);
    console.log("PROJECT TYPE: " + projectType);
    console.log("BUDGET: " + budget);
    console.log("DESCRIPTION: " + description);

    // Hide the slides and controls, bring in the Thank you message
    $(".slide").fadeOut(1000);
    $("#controls").fadeOut(1000);
    $(".thank-you").fadeIn(2000);
  }

});

// Hide the thank you message and disable the back button from the start
$(".thank-you").hide();
$("#back-button").prop("disabled",true);
$("#back-button").addClass("disabled");