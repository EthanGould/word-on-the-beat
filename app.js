$(document).ready(function(){

	var module = {};

	module.init = function() {
		module.songList = $('.new-song__list');
		module.eventHandlers();
	};


	module.eventHandlers = function() {
		$('.new-song__form').submit(module.parseSongInput);
	};

	module.buildSongEntry = function(song) {
		var songMarkup = 	'<li class="new-song__result js-song-result">' +
												'<p class="new-song__entry"><span class="new-song__title js-song-title">' + song.title + '</span><span class="new-song__artist js-song-artist">' + song.artist + '</span></p>' +
											'</li>';

		module.songList.append(songMarkup);
		setTimeout(function() {
			$('.js-song-result').addClass('drop-show');
		},10);
	};

	module.parseSongInput = function(event) {
		event.preventDefault();
		var $input = $(this).find('input[type="text"]');
		var values = $input.val().split('/');

		var newSong = {
			title: values[0] || '',
			artist: values[1] || ''
		};

		if (values.length[2]) {
			newSong.link = values[2];
		}

		module.buildSongEntry(newSong);
		$input.val('');
	}

	module.init();
});