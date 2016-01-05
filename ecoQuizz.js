$( function() {
	var buttons = $(".section button");
	var status = $("#status");
	var life = 10;
	
	startGame();
	setLife();
	buttons.click( function() {
		var section_suivante = $(this).attr("go");
		$('.section:visible').fadeOut('200', function() {
			gotoSection(section_suivante);
		});
	} );



	$('.section').click(function() {

	});
	
	function gotoSection(key) {
		var change_section = ('#' + key);
		$(change_section).show();

	}
	
	function getLife() {
		//...

	}
	
	function setLife(v) {
		//...
		$(".value").html(life);

	}
	
	function loseOneLife() {
		life --;
	}
	
	function startGame() {
		
		$('.section').hide();
		$('#intro').show();
	}

	function endGame() {
		$('.section').hide();
		$('#death').show();
	}
	
} );