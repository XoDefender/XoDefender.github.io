const progress = document.querySelector('.progress');
window.addEventListener('scroll', progressBar);
function progressBar(e) {
	let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
	let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	let per = windowScroll / windowHeight * 100;
	progress.style.width = per + '%';
}
// RANSLATE
$('.header_ru').on('click', function () {
	$('.ru').css({
		'display': 'flex',
		'justify-content': 'center',
		'align-items': 'center',
	});
	$('.en,.ua').css('display', 'none')
});

$('.header_ua').on('click', function () {
	$('.ua').css({
		'display': 'flex',
		'justify-content': 'center',
		'align-items': 'center',
	});
	$('.en,.ru').css('display', 'none')
});

$('.header_en').on('click', function () {
	$('.en').css({
		'display': 'flex',
		'justify-content': 'center',
		'align-items': 'center',
	});
	$('.ru,.ua').css('display', 'none')
});