<?php
$dbHandle = new PDO("mysql:host=localhost;dbname=bd_projet","syrine","syrine");
$dbHandle->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
// always disable emulated prepared statement when using the MySQL driver
$dbHandle->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
?>