<?php


if((isset($_POST['firstName'])))
{
  include("database-connection.php");

  $fname = $_POST['firstName'];
  $mname = $_POST['middleName'];
  $lname = $_POST['lastName'];
  $address = $_POST['address'];
  $city = $_POST['city'];
  $state = $_POST['state'];
  $jurisdiction = $_POST['jurisdictionID'];
  $dlid = $_POST['driversLicenseID'];
  $exp = $_POST['expDate'];
  $bdate = $_POST['birthDate'];

  $query = "SELECT * FROM patrons WHERE firstName = '$fname' AND lastName = '$lname' AND driversLicenseID = '$dlid'";

  $result = $db_conn->query($query);

  if($result->num_rows)
  {
    echo "Passed";
  }
  else
  {
    echo "Failed";
  }
}
else
{
  echo "Null";
}


/*
include("database-connection.php");

$query = "SELECT * FROM";

$result = $db_conn->query($query);

if($result->num_rows)
{
  echo "<div style='height:30px; width:50px; background-color: green;'></div>";
}
else
{
  echo "<div style='height:30px; width:50px; background-color: red;'></div>";
}
*/

?>
