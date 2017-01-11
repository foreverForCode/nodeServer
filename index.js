var server = require("./http");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle ={}
handle["/"]= requestHandlers.start;
handle["/start"]= requestHandlers.start;
handle["/upload"]= requestHandlers.upload;
handle["/tribePermission"] =requestHandlers.tribePermission;

server.start(router.route, handle);