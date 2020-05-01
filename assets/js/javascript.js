$("ul").on("click","li", function(){
	$(this).toggleClass("completed");
});
$("ul").on("click", ".delete", function(e){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	e.stopPropagation();
});
$("input[type=text]").keypress(function(event){
 if(event.which === 13){
 	var text = $(this).val();
 	$(this).val("");
 	$("ul").append("<li><span class=\"delete\"><i class=\"fa fa-trash\"></i></span>"+text+"</li>"); }
});
$("#plus").click(function(){
	$("input[type=text]").fadeToggle();
});