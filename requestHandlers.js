var exec = require("child_process").exec;
var data = require("./tribePermission");

function start(response){
    console.log("Request handler 'start' was called.");

    exec("find /",
        // { timeout:10000, maxBuffer:20000*1024},
        function(error, stdout, stderr){
            response.writeHead(200,{'content-Type':'text/plain','Access-Control-Allow-Origin':'http://127.0.0.1:4200'});
            response.write("123");
            response.end();
        });
}

function upload(response){
    console.log("Request handler 'upload' was called.");
    response.writeHead(200,{'content-Type':'text/plain','Access-Control-Allow-Origin':'http://127.0.0.1:4200'});
    response.write("Hello Upload");
    response.end();
}
function tribePermission(response){
    console.log("Request handler 'upload' was called.");
    response.writeHead(200,{'content-Type':'text/plain','Access-Control-Allow-Origin':'http://127.0.0.1:4200'});
    var str = JSON.stringify(data);
    response.write(str);
    response.end();
}

exports.start = start;
exports.upload = upload;
exports.tribePermission = tribePermission;