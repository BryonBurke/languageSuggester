$(document).ready(function() {
  $("form#calculator").submit(function() {
    event.preventDefault();
var beverage = $(#beverage).val;

$("#output").text(beverage);
