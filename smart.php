<?php
$name = $_POST['name'];
$phone = $_POST['phone_number'];
$service = $_POST['service'];
$hours = $_POST['hours'];

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP(); // Set mailer to use SMTP
$mail->Host = 'smtp.yandex.ru'; // Specify main and backup SMTP servers
$mail->SMTPAuth = true; // Enable SMTP authentication
$mail->Username = 'alicia.mir0nova@yandex.ru'; // Наш логин
$mail->Password = 'JR+Sq2$4h;MR-X8'; // Наш пароль от ящика
$mail->SMTPSecure = 'ssl'; // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to

$mail->setFrom('alicia.mir0nova@yandex.ru', 'Алиса'); // От кого письмо 
// $mail->addAddress('eastashev@yandex.ru'); // Add a recipient
$mail->addAddress('nur3.dav.97@gmail.com');  // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
// $mail->addAttachment('/var/tmp/file.tar.gz'); // Add attachments
// $mail->addAttachment($_FILES['u-photo']['tmp_name'], $_FILES['u-photo']['name']); // Optional name
$mail->isHTML(true); // Set email format to HTML

$mail->Subject = 'Новая заявка с сайта.';
$mail->Body = '
<table style="width: 100%;">
<tr>
	<td style="border: 1px solid #bdbdbd; padding: 5px; width: 180px">Имя</td>
	<td style="border: 1px solid #bdbdbd; padding: 5px;">' . $name . '</td>
</tr>
<tr>
	<td style="border: 1px solid #bdbdbd; padding: 5px; width: 180px">Телефон</td>
	<td style="border: 1px solid #bdbdbd; padding: 5px;">' . $phone . '</td>
</tr>
<tr>
<td style="border: 1px solid #bdbdbd; padding: 5px; width: 180px">Услуга</td>
<td style="border: 1px solid #bdbdbd; padding: 5px;">' . $service . '</td>
</tr>
<tr>
	<td style="border: 1px solid #bdbdbd; padding: 5px; width: 180px">Количество часов</td>
	<td style="border: 1px solid #bdbdbd; padding: 5px;">' . $hours . '</td>
</tr>
</table>';

$mail->AltBody = 'Это альтернативный текст';

if (!$mail->send()) {
	echo 'Error';
} else {
	echo 'Good!';
}
