const https = require("https");
const http = require('http');
const fs = require("fs");



// Load image to memory

function convBase64(imgName){
    return fs.readFileSync(imgName).toString('base64')
}


const starData = {
                    stars: 
                    [   {"name": "Alia Bhatt",
                        "handle": "aliaabhatt",
                        "img": convBase64('aliabhatt.jpg')
                        },
                        {
                        "name": "Kangana Ranaut",
                        "handle": "team_kangana_ranaut",
                        "img": convBase64('kanganaranaut.jpg')
                    }]
                }

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
    		else if(request.url === "/star"){
    			response.writeHeader(200,{"Content-Type":"application/json"});
    			response.write(JSON.stringify(starData));
    			response.end();
    		}
    }).listen(8000);
});