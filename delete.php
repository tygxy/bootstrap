<?php
	require_once('connect.php');
    $name =$_POST['name'];
    $year =$_POST['year'];
    $month =$_POST['month'];
	switch ($month) {
		case '1':
			$deletesql ="update product set month01=0 WHERE name='$name' AND year='$year'";
			break;
		case '2':
			$deletesql ="update product set month02=0 WHERE name='$name' AND year='$year'";
			break;
		case '3':
			$deletesql ="update product set month03=0 WHERE name='$name' AND year='$year'";
			break;
		case '4':
			$deletesql ="update product set month04=0 WHERE name='$name' AND year='$year'";
			break;
		case '5':
			$deletesql ="update product set month05=0 WHERE name='$name' AND year='$year'";
			break;
		case '6':
			$deletesql ="update product set month06=0 WHERE name='$name' AND year='$year'";
			break;
		case '7':
			$deletesql ="update product set month07=0 WHERE name='$name' AND year='$year'";
			break;
		case '8':
			$deletesql ="update product set month08=0 WHERE name='$name' AND year='$year'";
			break;
		case '9':
			$deletesql ="update product set month09=0 WHERE name='$name' AND year='$year'";
			break;
		case '10':
			$deletesql ="update product set month10=0 WHERE name='$name' AND year='$year'";
			break;
		case '11':
			$deletesql ="update product set month11=0 WHERE name='$name' AND year='$year'";
			break;
		case '12':
			$deletesql ="update product set month12=0 WHERE name='$name' AND year='$year'";
			break;
		default:
			break;
	}
	mysql_query($deletesql);
?>