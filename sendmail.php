<?php
require_once 'PHPMailer/src/PHPMailer.php';
require_once 'PHPMailer/src/SMTP.php';
require_once 'PHPMailer/src/Exception.php';

$name = $_POST['name'];
$phone = $_POST['phone_number'];
$service = $_POST['service'];
$type = $_POST['type'];
$hours = $_POST['hours'];

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

$mail = new PHPMailer(true);
$mail->CharSet = 'utf-8';

try {
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;
    $mail->isSMTP();
    $mail->Host       = 'mail.hosting.reg.ru';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'test@aerobarnaul.ru';
    $mail->Password   = 'eP5lK0rC1wnF2kX5';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;

    $mail->setFrom('test@aerobarnaul.ru', 'АЭРОДРОМ «СТРИЖИ»');
    if ($type == 1) {
        $mail->addAddress('tanrey1964@mail.ru', 'Получатеь');
    } elseif ($type == 2) {
        $mail->addAddress('reizbih@mail.ru', 'Получатеь');
    } else {
        $mail->addAddress('reizbih@mail.ru', 'Получатеь');
    }
    $mail->addReplyTo('test@aerobarnaul.ru', 'АЭРОДРОМ «СТРИЖИ»');

    $mail->isHTML(true);
    $mail->Subject = 'Новая заявка с сайта.';

    if (!empty($hours)) {
        $hours_row = '
        <tr>
            <td style="border: 1px solid #bdbdbd; padding: 5px; width: 180px">Количество часов</td>
            <td style="border: 1px solid #bdbdbd; padding: 5px;">' . $hours . '</td>
        </tr>';
    } else {
        $hours_row = '';
    }

    $mail->Body = ' <table style="width: 100%;">
        <tr>
            <td style="border: 1px solid #bdbdbd; padding: 5px; width: 180px">Услуга</td>
            <td style="border: 1px solid #bdbdbd; padding: 5px;">' . $service . '</td>
        </tr>
        <tr>
            <td style="border: 1px solid #bdbdbd; padding: 5px; width: 180px">Имя</td>
            <td style="border: 1px solid #bdbdbd; padding: 5px;">' . $name . '</td>
        </tr>
        <tr>
            <td style="border: 1px solid #bdbdbd; padding: 5px; width: 180px">Телефон</td>
            <td style="border: 1px solid #bdbdbd; padding: 5px;">' . $phone . '</td>
        </tr>
        ' . $hours_row . '
    </table>';


    $mail->AltBody = 'Hello World!';

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
