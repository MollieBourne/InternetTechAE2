//Clock

function time()
{
	var today = new Date();
	
	var curr_hours = today.getHours();
	var curr_minutes = today.getMinutes();
	var curr_seconds = today.getSeconds(); 
 	
	var AmOrPm = isMorningAfternoon(curr_hours);
	
	var curr_time = curr_hours+":"+curr_minutes+":"+curr_seconds+ AmOrPm;
	
	document.getElementById("clock-large").innerHTML=curr_time;
        
	var button = document.getElementById("startClock");
	button.addEventListener("click", startclock);
	thedate();
}

function startclock()
{
	setInterval(time, 500);
}

function isMorningAfternoon(hours)
{
	
	if (hours >=12)
	{
		return"Pm";
	}

	else
	{
		return"Am";
	}
}

function thedate()
{
    var today = new Date();
    
    var date = today.getDate();
    var month = today.getMonth() +1;
    var yearFull = today.getFullYear();
    
    var curr_date =  date+":"+month+":"+yearFull;
    document.getElementById('date').innerHTML = curr_date;
}