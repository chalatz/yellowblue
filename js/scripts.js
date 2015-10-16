(function($){

	function handle_show_code(){

		var the_trigger = $('.show-me-the-code');
		var the_code = the_trigger.next('pre');

		the_code.hide();

		the_trigger.text('Show Code');
		the_trigger.addClass('toggle-code');

		the_trigger.on('click', function(event){

			event.preventDefault();

			var $this = $(this),
				the_code = $this.next('pre');

			the_code.slideToggle();

			$this.toggleClass('code-shown btn-red');

			$this.text(
				($this.hasClass('code-shown')) ? 'Hide Code' : 'Show Code'
			);

		});

	}

	function handle_fluidbox(){
		$('.image-link').fluidbox();
	}

	handle_show_code();
	handle_fluidbox();

	// scroll reveal initialization
	// ----- If you don't want the animations, just comment or delete the following line (window.sr = new scrollReveal();)
	// if you don't want the extra HTTP request either just go to _includes/footer.html and delete/comment the line with
	// the script tag that loads scrollreveal.js
	window.sr = new scrollReveal();


	//======= PLACE YOUR CUSTOM CODE BELOW THIS LINE ==========

	//======= YOUR CUSTOM CODE SHOULD END ABOVE THIS LINE ==========
	

})(jQuery);
