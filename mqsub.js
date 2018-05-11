var mqtt = require("mqtt");
var client = mqtt.connect("mqtt://localhost:1883");//連線
至mqtt

client.on("connect", function(){
	client.subscribe("test", {qos : 1});
	console.log("Already subscribed!");
});

client.on("message", function(topic, msg){
	console.log("testets");
	console.log("topic: " + topic + " / message: " + msg.toString());
});