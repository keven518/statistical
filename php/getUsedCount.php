<?php
	//这个文件是远程端：http://www.li.cc/jsonp2.php
	$_result = '[
	{
	  "success": <成功1/失败0/错误等状态码>,
	  "message": "<失败/错误时的额外信息>",
	  "data":[{
	            "name": “挂号”,
	            "channel": “健康云”,
	            "count": 2009
	        }]
	}


]';
	$_callback = $_GET['callback'];
	echo $_callback."($_result)";
?>