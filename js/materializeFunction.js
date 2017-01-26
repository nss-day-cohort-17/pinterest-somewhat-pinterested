console.log("I materialize!")

$(document).ready(function() {

	console.log("materialize ready")
	$(".dropdown-button").dropdown();

 	// $('select').material_select();

 	// $('.materialboxed').materialbox();

  $('.tooltipped').tooltip({delay: 50});
});
