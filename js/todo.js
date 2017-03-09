$(document).ready(function(){
  submitForm();
});

function submitForm() {
	$('form').submit(function add(event) {
		var listItem = $('#item').val();
		$('#list ol').append("<li>" + listItem + "</li>");
	event.preventDefault();
	})
}