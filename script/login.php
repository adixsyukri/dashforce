<?php
require('connection.php');

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$uname = $request->uname;
$pword = $request->pword;

if(!$query = $conn->query("
	select a.user_id as id, a.email as email, b.perm_group as permission, c.firstname, c.lastname
	from user a 
	inner join user_perm b on a.perm_level = b.perm_id 
    inner join user_profile c on a.user_id = c.user_id 
	where a.email='".$uname."' and a.password='".md5($pword)."' limit 1
	")){
	die('There was an error running the query [' . $conn->error . ']');
}
$login_arr = array();
if($query->num_rows > 0){
	while($row = $query->fetch_assoc()){
        $row_array['status'] = 'true';
        $row_array['id'] = $row["id"];
        $row_array['email'] = $row["email"];
        $row_array['permission'] = $row["permission"];
        $row_array['firstname'] = $row["firstname"];
        $row_array['lastname'] = $row["lastname"];
        
        array_push($login_arr,$row_array);
	}
    echo json_encode($login_arr);
} else {
    
$row_array['status'] = 'false';
array_push($login_arr,$row_array);
echo json_encode($login_arr);
    
}


?>
