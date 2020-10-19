<?php
if (isset($_POST["sends"])) {
    $to = "sales@marketing-na100.ru";
    $subject = "ЗАЯВКА НА ПЭ LB-52U ГОСТ";
    $charset = "utf-8";
    $headerss ="Content-type: text/html; charset=$charset\r\n";
    $headerss.="MIME-Version: 1.0\r\n";
    $headerss.="Date: ".date('D, d M Y h:i:s O')."\r\n";
    $msg = "Имя: ".$_POST["name"]."\r\nТелефон: ".$_POST["phone"]."\r\nEmail: ".$_POST["email"]."\r\n";
    mail($to, $subject, $msg, $headerss); ?>