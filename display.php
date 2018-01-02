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

  $searchQuery = "SELECT * FROM patrons WHERE firstName = '$fname' AND lastName = '$lname'"; // AND driversLicenseID = '$dlid'

  $result = $db_conn->query($searchQuery);

  if($result->num_rows)
  {
    echo "Passed";
  }
  else
  {
    $patronid = "NULL";
    $banned = 0;
    $notes = "";

    $addPatron = "INSERT INTO task_list VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

    $stmt = $db_conn->prepare($addPatron);
    $stmt->bind_param("issssssssssis", $patronid, $fname, $mname, $lname, $address, $city, $state, $jurisdiction, $dlid, $exp, $bdate, $banned, $notes);
    $stmt->execute();

    echo "Added";
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
