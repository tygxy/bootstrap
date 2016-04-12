<?php
	require_once('connect.php');
	$result = mysql_query("SELECT * FROM `product` WHERE `name` like '".$_GET['name']."' AND `year` = '".$_GET['year']."' ");
	$res = array();
	while($row = mysql_fetch_array($result))
	{
	 	$res[] = $row;
	}
	print_r(json_encode($res));
 ?>

