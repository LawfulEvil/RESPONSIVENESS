<?php

if(isset($_POST['submit'])) {
    
    $to = "isaiah.sanmiguel@gmail.com";
    $subject = "New Email from " $_POST['name'];
    $message = $_POST['subject']\n$_POST['body'];
    
    mail($to, %subject, $message);
     
}

?>