// Off Canvas Sliding
$(document).ready(function(){
  // Menu button click
  $('#js-menu-trigger,#js-menu-screen').on('click touchstart', function(e){
    // $('#js-body').toggleClass('no-scroll');
    $('#js-menu, #js-menu-screen').toggleClass('is-visible')
    $('#js-menu-trigger').toggleClass('slide close')
    // $('#masthead, #page-wrapper').toggleClass('slide');
    e.preventDefault()
  })
})

// FitVids
$(document).ready(function(){
  // Target your .container, .wrapper, .post, etc.
  // $("#main").fitVids()
  
  // setInterval($('#spin').fadeOut(), 3000);
  $( "#masthead" ).fadeIn( "slow", function() {});
  $( "#js-menu-trigger" ).fadeIn( "slow", function() {});
  $( "#js-menu-screen" ).fadeIn( "slow", function() {});
  $( "#page-wrapper" ).fadeIn( "slow", function() {});

  setInterval(function(){
    $('#spin').fadeOut( "slow", function() {});

  $( "#pluswrap" ).remove();
    // $('#masthead').fadeIn()
    // $('#js-menu-trigger').fadeIn()
    // $('#js-menu-screen').fadeIn()
    // $('#page-wrapper').fadeIn()
    }, 5000);


  if (navigator.geolocation) {
    console.log('Geolocation is supported!');

    var startPos;
    var geoSuccess = function(position) {
      startPos = position;
      console.log(startPos.coords.latitude)
      console.log(startPos.coords.longitude)

      var distance = google.maps.geometry.spherical.computeDistanceBetween(
        new google.maps.LatLng(startPos.coords.latitude, startPos.coords.longitude),
        new google.maps.LatLng(50.1640478, 129.4866887));
      console.log(distance);
      distance2 = Math.round(distance * 10) / 10
      m = Math.round(distance2 * 1000) / 1000
      localStorage.setItem('m', m);
    };
    navigator.geolocation.getCurrentPosition(geoSuccess);

    myVar = setTimeout(function() {
      let mt = localStorage.getItem('m') + ' метров до Кафе'
      $("#mm").text(mt)
    }, 5000);


  } else {
    console.log('Geolocation is not supported for this Browser/OS version yet.');
    $("#mm").text("Недоступна функция расчёта расстояния");
  }

  
})

// Table of Contents title. Change text to localize
$("#markdown-toc").prepend("<li><h6>{{ site.data.messages.locales[site.locale].overview }}</h6></li>")




  // FitVids
  // $(document).ready(function() {

    // (function() {
      // do some stuff
      // if (localStorage.getItem('m')) {
      //   // $("#mm").text("Недоступна функция расчёта расстояния");
      // } else {
      //   myVar = setTimeout(function() {
      //     let mt = localStorage.getItem('m') + ' метров до Кафе'
      //     $("#mm").text(mt)
      //   }, 1500);
      // }
    // })();


  // });
