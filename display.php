<?php


if((isset($_POST['firstName'])) && (isset($_POST['lastName'])))
{
  include("database-connection.php");

  $fname = $_POST['firstName'];

  $query = "SELECT * FROM drivers_license WHERE fname = '$fname'";

  $result = $db_conn->query($query);

  if($result->num_rows)
  {
    echo "<div style='height:100%; width:100%; background-color: green;'></div>";
  }
  else
  {
    echo "<div style='height:100%; width:100%; background-color: red;'></div>";
  }
}
else
{
  echo "failure!";
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
