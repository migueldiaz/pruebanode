function route(pathname,handle,response){
 console.log("A punto de enrutar una peticion para "+pathname);

 if (typeof handle[pathname]==='function') {
 	handle[pathname](response);
 } else{
 	console.log("No request handler found for "+pathname);
 	response.writeHead(200,{"content-type": "text/plain"});
 	response.write("404 No encontrado");
 	response.end();
 };
}
exports.route=route;