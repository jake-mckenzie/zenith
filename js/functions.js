var pContainerHeight = $('.content-1').height();

$(window).scroll(function(){
  var wScroll = $(this).scrollTop();
  if (wScroll <= pContainerHeight) {
    $('.logo').css({
      'transform' : 'translate(0px, '+ wScroll /3 +'%)'
    });
  }


// Past Work
  if(wScroll > $('.grid-pics').offset().top - ($(window).height() / 1.2)) {
    $('.grid-pics figure').each(function(i){
      setTimeout(function(){
        $('.grid-pics figure').eq(i).addClass('is-showing');
      }, (700 * (Math.exp(i * 0.14))) - 700);
    });
  }

  // Floating Elements
  if(wScroll > $('.blog-posts').offset().top - $(window).height()){
    var offset = (Math.min(0, wScroll - $('.blog-posts').offset().top +$(window).height() - 350)).toFixed();
    $('.post-1').css({'transform': 'translate('+ offset +'px, '+ Math.abs(offset * 0.2) +'px)'});
    $('.post-3').css({'transform': 'translate('+ Math.abs(offset) +'px, '+ Math.abs(offset * 0.2) +'px)'});
  }
});
