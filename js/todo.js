$(document).ready(function(){
  // call functions here
  submitForm()
});

function submitForm(){
	$("form").submit(function(event){
		var placeWrite = $("#item").val();
		$('ol').append( '<li>' + placeWrite + '</li>' );
		event.preventDefault();
	})
}

