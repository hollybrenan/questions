//= require_tree .



$(document).ready(function(){

$("#buttonOne").click(function () {
      $('#cardOne').slideUp('slow');
      return false;
});


$('#buttonTwo').click(function(){
$('#cardTwo').slideUp('slow');
return false;
});

$("#backTwo").click(function() {
	$("#cardOne").slideDown();
	return false;
});

$('#buttonThree').click(function(){
$('#cardThree').slideUp('slow');
return false;
});

$("#backThree").click(function() {
	$("#cardTwo").slideDown();
	return false;
});

$('#buttonFour').click(function(){
$('#cardFour').slideUp('slow');
return false;
});

$("#backFour").click(function() {
	$("#cardThree").slideDown();
	return false;
});

$('#buttonFive').click(function(){
$('#cardFive').slideUp('slow');
return false;
});

$("#backFive").click(function() {
	$("#cardFour").slideDown();
	return false;
});

});