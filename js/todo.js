$(document).ready(function(){
  // call functions here
  submitted();
});

function submitted() {
  $('form').submit(function(event){
    var new_name = $('#item').val()
    $('.new_name').append(new_name + '</br>')
    event.preventDefault();
  })
}
// define functions here
