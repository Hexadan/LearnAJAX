//checks to make sure all the necessary files are available and focuses the input field
$(document).ready(function()
{
    console.log("ready!");
    $("#inputText").focus();
});

//when the convert button is clicked, the first stripe of the card is formatted into a readable format
$(document).on("click", "#checkText", function()
{
  //gets the value of the input field
  var dlInfo = $("#inputText").val();

  var trackOne = dlInfo.substring(dlInfo.indexOf("%"), dlInfo.indexOf("?;"));
  console.log("Track One: " + trackOne);

  var trackTwo = dlInfo.substring(dlInfo.indexOf("?;"), dlInfo.indexOf("?#"));
  console.log("Track Two: " + trackTwo);

  var trackThree = dlInfo.substring(dlInfo.indexOf("?#"), dlInfo.length);
  console.log("Track Three: " + trackThree);

  //removes all white space - might be needed later
  //dlInfo = dlInfo.replace(/\s/g,'');


  //Track One
  //variables needed for proper output
  //name variables
  var name;
  var lname;
  var fname;
  var mname;

  //location variables
  var address;
  var city;
  var state;

  //variable used to output data
  var output;

  //assigns state initials
  state = "State: " + trackOne.substring(1,3);

  //depending on if the city is 13 characters or less, a ^ is placed to seperate between city and information
  //if the city is exactly 13 characters or more then a ^ won't be placed
  if((dlInfo.substring(dlInfo.indexOf('%'),dlInfo.indexOf('$'))).includes('^'))
  {
    //simple output just to clarify for testing purposes
    console.log("City is less than 13 characters");
    //seperates and formats city
    city = "City: " + dlInfo.substring(3, dlInfo.indexOf('^'));

    //grabs name information between start (^) and end ($^) of name info
    name = dlInfo.substring(dlInfo.indexOf('^') + 1, dlInfo.indexOf('$^'));
    nameArray = name.split('$');

    //assigns and formats name info
    lname = "Last Name: " + nameArray[0];
    fname = "First Name: " + nameArray[1];
    mname = "Middle Name: " + nameArray[2];
  }
  else
  {
    console.log("City is 13 characters");
    city = "City: " + dlInfo.substring(3, 16);

    name = dlInfo.substring(dlInfo.indexOf('$'), dlInfo.indexOf('$^'));
    nameArray = name.split('$');

    lname = "Last Name: " + dlInfo.substring(16, dlInfo.indexOf('$'));
    fname = "First Name: " + nameArray[1];
    mname = "Middle Name: " + nameArray[2];
  }

  address = "Address: " + dlInfo.substring(dlInfo.indexOf('$^') + 2, dlInfo.indexOf('^?'));

  //Track Two
  jurisdictionID = "Jurisdiction ID: " + trackTwo.substring(2,8);

  dlID = "Driver's License ID: " + trackTwo.substring(8, trackTwo.indexOf("="));

  dateInfo = trackTwo.substring(trackTwo.indexOf("="), trackTwo.length);
  console.log(dateInfo);

  expiration = "Expires: " + dateInfo.substring(3,5) + "/" + dateInfo.substring(1,3) + " (MM/YY)";
  birthdate = "Birth Date: " + dateInfo.substring(9,11) + "/" + dateInfo.substring(11,13) + "/" + dateInfo.substring(5,9);

  //Track Three


  //output
  output =  fname + "\n" + mname + "\n" + lname + "\n" + address + "\n" + city + "\n" + state + "\n" + jurisdictionID + "\n" + dlID  + "\n" + expiration + "\n" + birthdate;

  $("#outputText").val(output);
  $("#inputText").focus();
  $("#inputText").val("");
});

function NumberToLetter(num)
{
  var letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];

  return letters[num - 1];
}
