<?php 

header('Context-Type: text/event-stream');
header('Cache-Control: no-cache');

$time = data('r');
echo "data: the server time is: {$time}\n\n";
flush();


?>
