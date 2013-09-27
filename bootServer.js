var http=require('http');
var url= require("url");

function start(route,handle){
	function onRequest(request,response){
		//console.log("Request loaded");
  
    	var pathname= url.parse(request.url).pathname;
    	console.log("Request for "+pathname+" received"); 

    	route(pathname,handle,response);

		response.writeHead(200,{"content-type": "text/plain"});
		response.write("Hi, I'm running");
		response.end();
  		}
  	http.createServer(onRequest).listen(8888);
  	console.log("Running on http://localhost:8888");
	}

exports.start = start;