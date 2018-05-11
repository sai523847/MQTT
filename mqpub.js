var mqtt = require("mqtt");
var client = mqtt.connect("mqtt://localhost:1883");

client.on("connect", function(){
	console.log("mqpub start!!!");
	//每3秒發布一次
	setInterval(function (){
		client.publish("test", "Hello, world!! ",{qos : 1});
	},3000);
	//client.publish("test", "Hello, world!! ",{qos : 1});
	console.log("send Hello world already! ");
});


