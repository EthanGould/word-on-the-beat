$(document).ready(function(){
	$('.new-song').submit(function(event) {
		event.preventDefault();
		var input = $(this).find('input.parsable').val().split('/');

		var newSong = {
			title: input[0],
			artist: input[1]
		};

		if (input.length[2]) {
			newSong.link = input[2];
		}
		
		$('.song .title').text(newSong.title);;
		$('.song .artist').text(newSong.artist);
		$('.song').show();
	});
});