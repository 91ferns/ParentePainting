<?php

$name = (isset($_POST['FullName']) && !empty($_POST['FullName'])) ? $_POST['FullName'] : false;
$phone = (isset($_POST['Phone']) && !empty($_POST['Phone'])) ? $_POST['Phone'] : false;
$message = (isset($_POST['Message']) && !empty($_POST['Message'])) ? $_POST['Message'] : false;
$email = (isset($_POST['Email']) && !empty($_POST['Email'])) ? $_POST['Email'] : false;

$headers = array(sprintf("Reply-to: %s", $email), "From: mailer@91ferns.com");

mail( "parentepainting19@gmail.com", "New Message from ".$email, $message, implode("\r\n", $headers ) );

header("Location: /?msg=sent");exit;