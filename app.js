const https = require("https");
setInterval(function(){ 
    //this code runs every second 

	const url = "https://www.instagram.com/aliaabhatt/?__a=1";

	https.get(url, res => {
	  res.setEncoding("utf8");
	  let body = "";
	  res.on("data", data => {
		body += data;
	  });
	  res.on("end", () => {
		body = JSON.parse(body);
		console.log(body.graphql.user.edge_followed_by.count);
	  });
	});
}, 5000);