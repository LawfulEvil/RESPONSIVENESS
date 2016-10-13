<?php

if(isset($_POST['submit'])) {
    
    $to = "isaiah.sanmiguel@gmail.com";
    $subject = "New Email from " $_POST['name'];
    $message = $_POST['body'];
    $headers = $_POST['subject'];
    
    mail($to, %subject, $message, $headers);
     
    header("Location: contact.html"); 
    
}

?>