$(document).ready(function() {
  var cardArray = []
  $('#card').on('submit', function(event) {
    event.preventDefault();

    that = $(this).serialize();

    cardArray.push(that);
    
    document.getElementById("card").reset();
  })

  $('#deck').on('submit', function(event) {
    event.preventDefault();

    var url = $(this).attr('href');
    $.post(url, that, function(serverResponse, status, request){
      
    })

  })
});
