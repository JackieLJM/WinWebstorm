<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js"><script>

<script type="text/javasript">
	$(document).ready(
	function(){
		$(window).bind("resize",resizeWindow);
		function resizeWindow(e){
			var newWindowsWidth = $(window).width();

			if(newWindowsWidth<600){
				("link[rel=stylesheet]").attr({herf:"mobile.css"});
			}
			$("link[rel=stylesheet]").attr({herf:"style.css"});
		}	
	}
);
</script>