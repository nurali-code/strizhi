<?php
// Получение значений полей формы
$name = $_POST['name'];
$phone_number = $_POST['phone_number'];
$service = $_POST['service'];
$message = $_POST['message'];

// Формирование заголовков письма
$to = 'nur3.dav.97@gmail.com';
$subject = 'Новое сообщение с сайта';
$headers = 'From: ' . $name . ' <' . $email . '>' . "\r\n" .
            'Reply-To: ' . $email . "\r\n" .
            'X-Mailer: PHP/' . phpversion();

// Формирование тела письма
$body = "Имя: $name\n" .
        "Телефон: $phone_number\n" .
        "Услуга: $service\n" .
        "Сообщение:\n$message";

// Отправка письма
if (mail($to, $subject, $body, $headers)) {
    echo 'Сообщение отправлено';
} else {
    echo 'Сообщение не отправлено';
}
?>
