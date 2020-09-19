$(function(){
    $('.card').click(function(e){
        let card = $(e.currentTarget)
        $(card).toggleClass('active')
        let card_offset_scrolltop = $(card).offset().top - $(window).scrollTop()
        $(card).css('--data-mytop', card_offset_scrolltop * -1 + 'px')
        
        let ratio=480/420
        height -= $(card).find('img').outerHeight() * ratio
        height -= $(card).find('h2').outerHeight() * ratio
        height /= ratio
        $(card).find('.content').css('height',height)

        if ($(card).hasClass('active')) {
            $('body').addClass('noscroll')
          } else {
            $('body').removeClass('noscroll')
          }
    })
})