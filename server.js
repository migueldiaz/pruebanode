var server= require("./bootServer");
var router= require("./router");
var requestHandler = require("./requestHandlers");

var handle={}; // store the routes allowed

handle["/"]=requestHandler.index;
handle["/index"]=requestHandler.index;
handle["/show"]=requestHandler.show;

server.start(router.route,handle);

