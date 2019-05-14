var Request = require("request");

var msg = "Pickup from the Andheri to Sanpada";
var number = "9769074954"
var url = "http://mobi-marketing.biz/sendurlcomma.aspx?user=20088216&pwd=nrxb6u&senderid=RVTECH&mobileno=" + number + "&msgtext=" + msg + "&smstype=0"
console.log("Url hit");
Request.get(url, (error, response, body) => {
    if (error) {
        return console.dir(error);
        console.log("Url failed");
    }
    // console.dir(JSON.parse(body));
    console.log(body);
});