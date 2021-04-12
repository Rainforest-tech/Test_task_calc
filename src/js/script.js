var jquery = require("jquery");
var $ = window.$ = window.jQuery = jquery;

require("jquery-ui-bundle");
require("rangeslider.js/dist/rangeslider")

$(function() {

	$("#datepicker").datepicker({ dateFormat: 'dd-mm-yy' });

	const $summ =  $("#summ");
	$('#summ-range').rangeslider({
		polyfill : false,
		onSlide : function( position, value ) {
			$summ.val(value)
		}
	});
	$summ.on('input',function (){
		$("#summ-range").val($(this).val()).change()
	})

	const $summ_add =  $("#summ_add");
	$('#summ_scroll').rangeslider({
		polyfill : false,
		onSlide : function( position, value ) {
			$summ_add.val(value)
		}
	});
	$summ_add.on('input',function (){
		$("#summ_scroll").val($(this).val()).change()
	})

	$("#form").on('submit', function (e){
		e.preventDefault();
		$.post( "http://test_calculator.test/calc.php", $( "#form" ).serialize() )
			.done(function( data ) {
						$( "#result" ).html( data );
			})
			.fail(function( data ) {
				console.log(JSON.parse(data.responseText));
			});
	})

});



