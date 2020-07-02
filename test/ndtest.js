const request = require("request");
const cheerio = require("cheerio");


function proxyGenerator() {
  let ip_addresses = [];
  let port_numbers = [];
  let proxy;

  request('https://sslproxies.org/', function(error, response, html) {
    if (!error && response.statusCode == 200) {
      const $ = cheerio.load(html);
	//console.log(html);
      $("td:nth-child(1)").each(function(index, value) {
        ip_addresses[index] = $(this).text();
      });

      $("td:nth-child(2)").each(function(index, value) {
        port_numbers[index] = $(this).text();
      });
    } else {
      console.log("Error loading proxy, please try again");
    }
})
    ip_addresses.join(", ");
    port_numbers.join(", ");

    console.log("IP Addresses:", ip_addresses);
    //console.log("Port Numbers:", port_numbers);
    return "http://217.182.242.64:3128";
}

const options = {
  url:
    "http://www.example.com/", 
    method: "GET",
  proxy: "http://198.98.51.240:8080/"
};

request(options, function(error, response, html) {
	console.log(response);
  if (!error && response.statusCode == 200) {
	console.log(html);
    const $ = cheerio.load(html);
    let article_headings = $("h2").text();
    console.log(article_headings);
  } else {
	console.log(error);
    console.log("Error scraping site, please try again");
  }
})


