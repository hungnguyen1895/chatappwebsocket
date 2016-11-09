var ws = new WebSocket("ws://localhost:3000");

var userName = ""; 
var input = "";


ws.onopen = function() {
	setTitle("CONNECTED");

}

ws.onclose = function() {
	setTitle("DISCONNECTED");
}


//whenever the server receives the message, this function will fire
ws.onmessage = function(payload) {
	printMessage(payload.data);
}



//whenever users use enter key on the second form, this function will be executed
/*document.forms[0].onsubmit = function() {
	
	
	input = document.getElementById("message").value;
	ws.send(input);
	input = "";
	
}
*/

/*ENTER KEY */

function send() {
	
	input = document.getElementById("message");	
	userName = document.getElementById("userName").value;
	if(userName === "" || userName === null) {
		alert("Please fill out your name");
		return;
	}
	if(input.value === "" || input.value === null) {
		alert("Please fill out your message");
		return;
	}
	
	//send back to the server the userName and the message
	ws.send(userName + ": " + input.value);
	
	//after the first message, disable the input userName so user can not change their user name
	document.getElementById("userName").setAttribute("disabled", "disabled");
	input.value = "";
}


function setTitle(title) {
	document.querySelector("h2").innerHTML = title;
}

function printMessage(message) {
	var p = document.createElement("p");
	//add the message into the p tag which is just created
	p.innerText = message;

	//append the tag p with the message into the chat box
	document.querySelector("div.messages").appendChild(p);
}
	

	


