$(document).ready(function() {
	console.log("js connected");
	var mytextbbl = $("#mytext");
	var urtextbbl = $("#urtext");
	var buttonOne = $("#btn");
	var buttonTwo = $("#btn2");
	var dater;



	$('#btn').click(function(){
		// $.getJSON('https://www.boredapi.com/api/activity?type=recreational',function(data){
			var getIt = $.getJSON('https://www.boredapi.com/api/activity?type=recreational',function(data){
console.log(data);
dater = data;
});
			console.log(dater.activity);
				mytextbbl.css({'display': 'block'});

				$('#mytext p').text('heyy! Idk what do you suggest?');
				
			setTimeout(function(){
							
				$("#urtext").css({'display': 'block'});

			$('#urtext p').text(dater.activity);
			$('#btn p').text("no");
			$('#btn2 p').text("yes");

				}, 1000); // end of timeout function 

 		// this.value = "no";
			 
			console.log("hi");
		})	

		// if (buttonTwo.val("first")){
			
			$('#btn2').click(function(){
				setTimeout (function(){
			  var txt2 = $("<p></p>").text("WOOHOO Finally decided on something");  // Create text with jQuery
			  $('.yes').css({'display': 'block'});
			  $('.finally').css({'display': 'block'});
			  $(".finally").append(txt2);

			},1000);
		// }; // end of if statement

		}); // end of click function 2

}); // end of function onload
