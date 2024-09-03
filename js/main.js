/*global $*/
$('.gallary a').each(function(){
    $(this).css({'background-image': 'url(' + $(this).attr('href') + ')'});
 });

 /*$('.view-hidden').click(function () {

    $('.hidden-gallary').css('display' , 'block'); 
 });*/

 $(function() {
    $(".view-hidden").click(function(e) { // click event for load more
      e.preventDefault();
      $(".hidden-gallary:hidden").slice(0, 1).show(); // select next 1 hidden divs and show them
      if ($(".hidden-gallary:hidden").length == 0) { // check if any hidden divs still exist
        $('.view-hidden').text('--No more images--').css({'border' : 'none', 'cursor': 'pointer'});//remove some attribute
        $('.project span').removeClass('hover');
      }
    });
  });