$(function(){
    $('.card').click(function(e){
        let card = $(e.currentTarget)
        $(card).toggleClass('active')
        let card_offset_scrolltop = $(card).offset().top - $(window).scrollTop()
        $(card).css('--data-mytop', card_offset_scrolltop * -1 + 'px')
        
        let ratio=480/420
        let height1=$(card).find('img').outrHeight()*ratio
        let height2=$(card).find('h2').outrHeight()*ratio
        let height=$(window).height()-height1-height2
        height /= ratio
        $(card).find('.content').css('height',height)
    })
})