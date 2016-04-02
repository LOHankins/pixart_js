$(document).on("ready", function() {
	event.preventDefault();


var setColorButton = $("#set-color");
 

function handleClickButton() {
	console.log("handleClickButton");
	var chosenColor = $("#color-field").val();
	var brushBox = $(".brush");
	$(".brush").css("background-color", chosenColor);
	event.preventDefault();
	$("#color-field").val("");
}







$("#set-color").click(handleClickButton);
});