<?php
$servername = "localhost";
$username = "syrine";
$password = "syrine";
$dbname = "bd_projet";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>