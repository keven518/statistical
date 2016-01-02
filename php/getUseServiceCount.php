<?php
	//这个文件是远程端：http://www.li.cc/jsonp2.php
	$_result = '[
	{
	"success": 1,
	"message": "success",
	"data":{
	"callServiceSum": 20000,
	"callServiceDSum": 2222,
	"callServiceWSum": 6666,
	"callServiceMSum": 14888
	        }
	}

]';
	$_callback = $_GET['callback'];
	echo $_callback."($_result)";
?>