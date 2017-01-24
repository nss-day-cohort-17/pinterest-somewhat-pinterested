console.log("i materialize!")

$( document ).ready(function() {

	console.log(".ready")
	$(".dropdown-button").dropdown();

  $('select').material_select();
});
