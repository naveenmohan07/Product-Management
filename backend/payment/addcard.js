var qs=require("query-string")

var http=require("https")

var options = {
	"method": "POST",
	"hostname": "paypaldimasv1.p.rapidapi.com",
	"port": null,
	"path": "/createCreditCard",
	"headers": {
		"x-rapidapi-host": "PayPaldimasV1.p.rapidapi.com",
		"x-rapidapi-key": "0183c75125mshdf8c5ff24f80b3ap1d37b6jsnd90a7707855d",
		"content-type": "application/x-www-form-urlencoded",
		"useQueryString": true
	}
};

var req = http.request(options, function (res) {
	var chunks = [];

	res.on("data", function (chunk) {
		chunks.push(chunk);
	});

	res.on("end", function () {
		var body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.write(qs.stringify({}));
req.end();