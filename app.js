const https = require("https");
const http = require('http');
const fs = require("fs");



// Load image to memory
const buf = fs.readFileSync('aliabhatt.jpg');
const base64img = buf.toString('base64');

fs.readFile('./index.html', function (err, html) {
    if (err) {
        throw err; 
    }       
    http.createServer(function(request, response) { 
    		if(request.url === "/"){
    			response.writeHeader(200, {"Content-Type": "text/html"});  
        		response.write(html); 
        		response.end();	
    		}
    		else if(request.url === "/user"){
    			response.writeHeader(200,{"Content-Type":"application/json"});
    			var data = {
    				"name": "Alia Bhatt",
    				"handle": "aliaabhatt",
    				"img": base64img
    			}
    			response.write(JSON.stringify(data));
    			response.end();
    		}	
    }).listen(8000);
});