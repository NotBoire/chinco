$('.burger img').click(function() {
    var src = ($(this).attr('src') === 'img/menu.png')
        ? 'img/cancel.png'
        : 'img/menu.png';
    $(this).attr('src', src);

    var header = $('.header');
    var className = (header.attr('class') === 'header')
        ? 'header openmenu'
        : 'header';
    header.attr('class', className);
});

var $document = $(document),
    $element = $('.header'),
    className = 'hasScrolled';

$document.scroll(function() {
    $element.toggleClass(className, $document.scrollTop() >= 250);
});
