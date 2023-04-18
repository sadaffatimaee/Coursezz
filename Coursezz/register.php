<?php
// Replace the values in these variables with your own database credentials
$servername = "localhost";
$username = "root";
$password = "841406a@A";
$dbname = "detail";

// Create a connection to the database
$conn = new mysqli($servername, $username, $password, $dbname);

// Check if the connection was successful
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Extract the form data
$name = $_POST["user_name"];
$email = $_POST["user_email"];
$password = $_POST["user_psw"];

// Prepare the SQL statement to insert the data into the database
$sql = "INSERT INTO client VALUES ('$name', '$email', '$password')";

// Execute the SQL statement and check if it was successful
if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close the database connection
$conn->close();
?>
