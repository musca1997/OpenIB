/*
* youtube
* https://github.com/savetheinternet/Tinyboard/blob/master/js/youtube.js
*
* Don't load the YouTube player unless the video image is clicked.
* This increases performance issues when many videos are embedded on the same page.
* Currently only compatiable with YouTube.
*
* Proof of concept.
*
* Released under the MIT license
* Copyright (c) 2013 Michael Save <savetheinternet@tinyboard.org>
*
* Usage:
*	$config['embedding'] = array();
*	$config['embedding'][] = array(
*		'/^https?:\/\/(\w+\.)?youtube\.com\/watch\?v=([a-zA-Z0-9\-_]{10,11})(&.+)?$/i',
*		'<div class="video-container" data-video="$2"><a href="$0" target="_blank" class="file"><img style="width:360px;height:270px;" src="http://img.youtube.com/vi/$2/0.jpg"/></a></div>'
);
*   $config['additional_javascript'][] = 'js/jquery.min.js';
*   $config['additional_javascript'][] = 'js/youtube.js';
*
*/


onready(function(){
	$('div.video-container a').attr('href', 'javascript:void(0)');
	$('div.video-container').click(function() {
		var videoID = $(this).data('video');
		
		$(this).html('<iframe style="float:left;margin: 10px 20px" type="text/html" width="360" height="270" src="http://www.youtube.com/embed/' + videoID + '?autoplay=1" frameborder="0"/>');
	});
});

