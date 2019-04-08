$(function() {

    $('.container a').each(function(i) {
        let item = $(this);
        setTimeout(function() {
            item.fadeIn();
        }, i * 100);
    });

    lightbox.option({
        'albumLabel': 'Image %1 sur %2',
        'wrapAround': true
    });
});