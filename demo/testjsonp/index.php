<?php
	$callback=$_REQUEST['callback'];
	$name=$_REQUEST['name'];
	echo $callback."({\"name\":\"".$name."\"})";
?>