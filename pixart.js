$(document).on("ready", function() {
	event.preventDefault();


var setColorButton = $("#set-color");
var chosenColor = "";
 

function handleClickButton() {
	console.log("handleClickButton");
	chosenColor = $("#color-field").val();
	var brushBox = $(".brush");
	$(".brush").css("background-color", chosenColor);
	event.preventDefault();
	$("#color-field").val("");
	createSquares();
}

function handlePressEnter() {
	console.log("handlePressEnter");
	chosenColor = $("#color-field").val();
	var brushBox = $(".brush");
	$(".brush").css("background-color", chosenColor);
	event.preventDefault();
	$("#color-field").val("");
	createSquares();
}

function createSquares() {
	console.log("createSquares");
	var square = null; 	
	for (i = 0; i < 8000; i += 1) {
		$("body").append($("<div></div>").addClass("square").mouseover(handleClickSquares));

	}
	event.preventDefault();
	
}

function handleClickSquares() {
	console.log("handleClickSquares");
	$(this).css("background-color", chosenColor);
	event.preventDefault();

}



$("#form").submit(handlePressEnter);
$("#set-color").click(handleClickButton);
});