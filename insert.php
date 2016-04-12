<?php

	require_once('connect.php');
	$name = $_POST['product'];
	$year = $_POST['year'];
	$month = $_POST['month'];
	$sale = $_POST['sale'];
	switch ($month) {
		case '1':
			$insertsql ="update product set month01='$sale' WHERE name='$name' AND year='$year'";
			break;
		case '2':
			$insertsql ="update product set month02='$sale' WHERE name='$name' AND year='$year'";
			break;
		case '3':
			$insertsql ="update product set month03='$sale' WHERE name='$name' AND year='$year'";
			break;
		case '4':
			$insertsql ="update product set month04='$sale' WHERE name='$name' AND year='$year'";
			break;
		case '5':
			$insertsql ="update product set month05='$sale' WHERE name='$name' AND year='$year'";
			break;
		case '6':
			$insertsql ="update product set month06='$sale' WHERE name='$name' AND year='$year'";
			break;
		case '7':
			$insertsql ="update product set month07='$sale' WHERE name='$name' AND year='$year'";
			break;
		case '8':
			$insertsql ="update product set month08='$sale' WHERE name='$name' AND year='$year'";
			break;
		case '9':
			$insertsql ="update product set month09='$sale' WHERE name='$name' AND year='$year'";
			break;
		case '10':
			$insertsql ="update product set month10='$sale' WHERE name='$name' AND year='$year'";
			break;
		case '11':
			$insertsql ="update product set month11='$sale' WHERE name='$name' AND year='$year'";
			break;
		case '12':
			$insertsql ="update product set month12='$sale' WHERE name='$name' AND year='$year'";
			break;
		default:
			break;
	}
	 mysql_query($insertsql);
?>