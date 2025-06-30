<?php
header('Content-Type: application/json');

// Get form data
$name = $_POST['name'] ?? '';
$email = $_POST['email'] ?? '';
$website = $_POST['website'] ?? '';
$message = $_POST['message'] ?? '';

// Recipient email (change this to your email address)
$to = "rajan.abhay@gmail.com";

// Email subject
$subject = "New Contact Form Message from v2archdesign";

// Email content
$email_content = "Name: $name\n";
$email_content .= "Email: $email\n";
$email_content .= "Website: $website\n\n";
$email_content .= "Message:\n$message\n";

// Email headers
$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Send email
$success = mail($to, $subject, $email_content, $headers);

// Return response
echo json_encode(['success' => $success]);
?>
