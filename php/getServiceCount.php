<?php
	//这个文件是远程端：http://www.li.cc/jsonp2.php
	$_result = '[
	{
		"success": 1,
		"message": "",
		  "data":{
		            "serviceSum": 12345,
		            "serviceDSum": 15,
		            "serviceWSum": 25,
		            "serviceMSum": 23,
		            }

	}
]';
	$_callback = $_GET['callback'];
	echo $_callback."($_result)";
?>