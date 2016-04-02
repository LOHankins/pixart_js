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
	createSquares();
}

function handlePressEnter() {
	console.log("handlePressEnter");
	var chosenColor = $("#color-field").val();
	var brushBox = $(".brush");
	$(".brush").css("background-color", chosenColor);
	event.preventDefault();
	$("#color-field").val("");
	createSquares();
}

function createSquares() {
	console.log("createSquares");
	var square = null; 	
	for (i = 0; i < 20; i += 1) {
		$("body").append($("<div></div>").addClass("square"));
	}
	event.preventDefault();
	
}



$("#form").submit(handlePressEnter);
$("#set-color").click(handleClickButton);
});