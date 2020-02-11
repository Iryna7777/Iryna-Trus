<?php
	$name = $POST["name"]
	$tel = $POST["tel"]
	$Company = $POST["Company"] 
	
	$from = 'irynatrus@gmail.com';
	$to = 'irynatrus@gmail.com';
	$sub = "Письма от компании";
	$message = "Имя:$name\nТелефон:$tel\nКомпания:$Company";
	mail($to,$sub,$message,"Content-type:text/plain;charset = UTF-8\r\nFrom:$from");
	


?>