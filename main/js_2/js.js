
$('.button').on('click', function (e) {
  $(this).toggleClass('active')
  $(".menu_list").toggleClass('active');
});

$('.menu_btn').on('click', function (e) {
  $('.menu_btn').toggleClass('menu_btn_active')
  $('.right_menu').toggleClass('menu_active')
  $('.header_insurance').toggleClass('dn')
});
/*TRANSLATE NENU*/
$('.footer_ru').on('click', function () {
  $('.ru').css({
    'display': 'block',
    'width': '80%',
    'height': '30%',
    'display': 'flex',
    'justify-content': 'space-around',
    'align-items': 'center',
  });
  $('.en,.ua').css('display', 'none')
});

$('.footer_ua').on('click', function () {
  $('.ua').css({
    'display': 'block',
    'width': '80%',
    'height': '30%',
    'display': 'flex',
    'justify-content': 'space-around',
    'align-items': 'center',
  });
  $('.en,.ru').css('display', 'none')
});
$('.footer_en').on('click', function () {
  $('.en').css({
    'display': 'block',
    'width': '80%',
    'height': '30%',
    'display': 'flex',
    'justify-content': 'space-around',
    'align-items': 'center',
  });
  $('.ru,.ua').css('display', 'none')
});
/*MAIN NEXT */
$('.footer_ru').on('click', function () {
  $('.sru').css({
    'display': 'block',
  });
  $('.sen,.sua').css('display', 'none')
});

$('.footer_ua').on('click', function () {
  $('.sua').css({
    'display': 'block',
  });
  $('.sen,.sru').css('display', 'none')
});

$('.footer_en').on('click', function () {
  $('.sen').css({
    'display': 'block',
  });
  $('.sru,.sua').css('display', 'none')
});
/*header*/
$('.header_ru').on('click', function () {
  $('.sru').css({
    'display': 'block',
  });
  $('.sen,.sua').css('display', 'none')
});

$('.header_ua').on('click', function () {
  $('.sua').css({
    'display': 'block',
  });
  $('.sen,.sru').css('display', 'none')
});

$('.header_en').on('click', function () {
  $('.sen').css({
    'display': 'block',
  });
  $('.sru,.sua').css('display', 'none')
});
/*Alternative_menu*/
$('.header_ru').on('click', function () {
  $('.aru').css({
    'display': 'block',
    'height': '75%',
    'width': '95%',
    'display': 'flex',
    'flex-direction': 'column',
    'justify-content': 'space-between',
    'align-items': 'center',
  });
  $('.aen,.aua').css('display', 'none')
});

$('.header_ua').on('click', function () {
  $('.aua').css({
    'display': 'block',
    'height': '75%',
    'width': '95%',
    'display': 'flex',
    'flex-direction': 'column',
    'justify-content': 'space-between',
    'align-items': 'center',
  });
  $('.aen,.aru').css('display', 'none')
});

$('.header_en').on('click', function () {
  $('.aen').css({
    'display': 'block',
    'height': '75%',
    'width': '95%',
    'display': 'flex',
    'flex-direction': 'column',
    'justify-content': 'space-between',
    'align-items': 'center',
  });
  $('.aru,.aua').css('display', 'none')
});
/* right_menu_list*/
$('.footer_ru').on('click', function () {
  $('.rru').css({
    'display': 'block',
    'height': '100%',
    'width': '100%',
    'display': 'flex',
    'align-items': 'center',
    'justify-content': 'space-around',
    'flex-direction': 'column',
  });
  $('.ren,.rua').css('display', 'none')
});

$('.footer_ua').on('click', function () {
  $('.rua').css({
    'display': 'block',
    'height': '100%',
    'width': '100%',
    'display': 'flex',
    'align-items': 'center',
    'justify-content': 'space-around',
    'flex-direction': 'column',
  });
  $('.ren,.rru').css('display', 'none')
});

$('.footer_en').on('click', function () {
  $('.ren').css({
    'display': 'block',
    'height': '100%',
    'width': '100%',
    'display': 'flex',
    'align-items': 'center',
    'justify-content': 'space-around',
    'flex-direction': 'column',
  });
  $('.rru,.rua').css('display', 'none')
});