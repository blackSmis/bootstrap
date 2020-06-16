$(document).ready(function () {
    $(window).on('resize',function () {
        let clientW = $(window).width();
        // console.log(clientW);
        let isShowBigImg = clientW >= 640;
        let allItems = $('#lk_carousel .item');
        allItems.each(function (index,item) {
            let src = isShowBigImg ? $(item).data('lg-img'):$(item).data('sm-img');
            let imgUrl = 'url('+src+')';
            $(item).css({
                backgroundImage:imgUrl
            });
            if(!isShowBigImg){
                let img = "<img src='"+src+"'>";
                $(item).empty().append(img);
            }else{
                $(item).empty();
            }
        });
    });
    $(window).trigger('resize');
    //工具提示
    $('[data-toggle="tooltip"]').tooltip()
});