console.log("myJS is Fine");

var GreetingContainer;
GreetingContainer = "Cooolio";

console.log(GreetingContainer);

// alert('oh damn, this site is ' + GreetingContainer);

document.write('<p>'+ GreetingContainer +'</p>');
// no diff between one quote and double quote

var arrange= document.getElementsByClassName('msg');
//arrange is an array composed of three elements, which are all the Ps that have the class msg

var attributes = ["pink", "yellow", "green"];

for (var i = 0; i <attributes.length; i++) {
	
	for (var i = 0; i < arrange.length; i++) {
	//innerHTML basically grabs an element from the HTML to modify

	arrange[i].innerHTML= attributes[i];
}
}


