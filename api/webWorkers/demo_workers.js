var i = 0;

function timwCount(){
	i = i + 1;
	postMessage(i);
	setTimeout("timedCount()",500);
}

timedCount();
