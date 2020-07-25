$("ul").on("click","li", function(){
	$(this).toggleClass("hov");
});

$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(250,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input").on("keypress",function(event){
	if (event.which === 13){
		var r = $(this).val();
		$(this).val("");
	$("ul").append("<li><span><i class='fa fa-trash'></i></span> "+ r +"</li>");
}
});

$("#plus").on("click", function(){
	$("input").fadeToggle(250);
});