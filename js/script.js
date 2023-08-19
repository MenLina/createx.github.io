 
$(function () {
 
  var mixer = mixitup ('.directions_list');
  
  $('.directions_filter-btn').on('click', function (){
    $('.directions_filter-btn').removeClass('directions_filter-btn--active')
    $(this).addClass('directions_filter-btn--active')
  }
  )
  

});
Fancybox.bind("[data-fancybox]", {
  // Your custom options
});



// $('.team_slider').slick({
//   lazyLoad: 'ondemand',
//   slidesToShow: 3,
//   slidesToScroll: 1
// });