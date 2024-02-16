<?php

header('Content-Type: application/json');

// Replace with your Discord webhook URL
$webhookUrl = 'https://discord.com/api/webhooks/your-webhook-id/your-webhook-token';

// Check if the form is submitted using POST method
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Extract form data
    $username = isset($_POST['username']) ? htmlspecialchars($_POST['username']) : '';
    $discord_invite_link = isset($_POST['discord_invite_link']) ? htmlspecialchars($_POST['discord_invite_link']) : '';
    $discord_name = isset($_POST['discord_name']) ? htmlspecialchars($_POST['discord_name']) : '';

    // Validate data (you can add more validation as needed)
    if (empty($discord_name) || empty($username) || empty($discord_invite_link)) {
        echo json_encode(['status' => 'failed', 'message' => 'All fields should be filled in!']);
        exit();
    }

    // Get ip address that did that request to prevent spam
    $ip = $_SERVER['REMOTE_ADDR'];

    // Prepare data to send to Discord
    $data = [
        'content' => "New form submission:\nDiscord's name: `$discord_name`\nInvitation url: `$discord_invite_link`\n\nTo prevent spam, user's (`$username`) ip address: (`$ip`)",
    ];

    // Convert data to JSON format
    $jsonData = json_encode($data);

    // Set up cURL to send a POST request to Discord webhook
    $ch = curl_init($webhookUrl);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $jsonData);
    curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    // Execute cURL and close the connection
    $response = curl_exec($ch);
    $statusCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    // Check if the request was successful
    if ($response === false || $statusCode !== 204) {
        echo json_encode(['status' => 'failed', 'message' => 'Error sending data to Discord webhook.']);
    } else {
        echo json_encode(['status' => 'success', 'message' => 'Data sent to Discord successfully.']);
    }
} else {
    echo json_encode(['status' => 'failed', 'message' => 'Invalid request method.']);
}
