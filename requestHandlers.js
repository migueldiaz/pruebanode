

function index(response){
	var people= require("./people");
	console.log("Route: index");

	people(function(table) {
   console.log(table);
	});
	var body= 
	'<html>'+
	'<head>'+
	'<meta http-equiv="Content-type" content="text/html";>'+
	'<charset=UTF-8 />'+
	'</head>'+
	'<p>What the hell</p>'+
	 //table+
	'</body>'+
	'</html>';
	response.writeHead(200,{"content-type": "text/html"});
	
	response.write(body);
	response.end();
}
function show(response){


}
exports.index=index;
exports.show=show;