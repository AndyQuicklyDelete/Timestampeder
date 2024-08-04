function appendTimestamp() {	
	var now = new Date();
	
	year = now.getFullYear();
	month = now.getMonth() + 1;
	month = (month <10?'0':'') + month;
	day = (now.getDate() <10?'0':'') + now.getDate();
	hour = (now.getHours() <10?'0':'') + now.getHours();
	minutes = (now.getMinutes() <10?'0':'') + now.getMinutes();
	seconds = (now.getSeconds() <10?'0':'') + now.getSeconds();
  
	/*//Current format */
	var myDate = year.toString() + "-" + month.toString() + "-" + day.toString();
	var myTime = hour.toString() + "." + minutes.toString() + "." + seconds.toString();
  
	/*//Original format */
	//var myDate = year.toString() + month.toString() + day.toString();
	//var myTime = hour.toString() + minutes.toString() + seconds.toString();
	//var timestamp = myDate + "T" + myTime;
	
	/*//Current released format */
	//var myDate = day.toString() + "-" + month.toString() + "-" + year.toString();
	//var myTime = hour.toString() + "." + minutes.toString() + "." + seconds.toString();
	//var timestamp = myDate + "_" + myTime;
	
	var timestamp = myDate + "_" + myTime;
	return timestamp;
}

chrome.downloads.onDeterminingFilename.addListener(function(item, suggest) {
	var newFilename = appendTimestamp() + "-" + item.filename;
	suggest({filename: newFilename});
});
