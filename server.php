<?php
if(isset($_GET['name'])) {
    $name = $_GET['name'];
    echo "Hello <b>$name</b>! This content was loaded asynchronously.";
}
?>
