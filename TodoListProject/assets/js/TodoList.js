//Marking items in list completed or incomplete
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//Deleting a item from the list
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	})
	event.stopPropagation();
})

//Adding a new item to the list
$("input[type = 'text']").keypress(function(event){
	if(event.which === 13){
		var itemText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span>X</span> " + itemText + "</li>");
	}
})