$(document).ready(function() {
  // var cardArray = []

  // $('#deck_button').hide();

  // $('#card').on('submit', function(event) {
  //   event.preventDefault();

  //   card_information = $(this).serialize();
  //   console.log(card_information);

  //   cardArray.push(card_information);

  //   document.getElementById("card").reset();

  //   $('#deck_button').show();
  // })

  // $('#deck').on('submit', function(event) {
  //   event.preventDefault();

  //   info_to_send = {}

  //   info_to_send.card_information = card_information;
  //   info_to_send.deck_information = $(this).serialize();

  //   var url = $(this).attr('href');
  //   $.post('/create_deck', info_to_send, function(serverResponse, status, request){
  //   })
  // })

  $('#signup').on('click', function(event) {
    event.preventDefault();

    $(this).hide();

    var url = $(this).attr('href');

    $.get(url, function(serverResponse, status, request) {
      $('.container').append(serverResponse);
    });
  });

  $('#create-deck').on('click', function(event) {
    event.preventDefault();
    var url = $(this).attr('href');
    $('#create-deck').hide(); // need to show this later

    $.get(url, function(serverResponse, status, request) {
      $('.container').append(serverResponse);
    });
  });

  $('.deck').on('submit', '#deck-form', function(event) {
    event.preventDefault();

    var title = $('input[name=name]').val();
    var description = $('textarea[name=description]').val();

    var url = $(this).attr('action');
    var data = $(this).serialize();

    console.log(url)
    console.log(data)

    $.post(url, data, function(serverResponse, status, request) {
      console.log(serverResponse);
      $('#deck-title').append('Deck Title: ' + title);
      $('#deck-description').append('Deck Description: ' + description);
      $('#create-card').append('Add a card');
    });

    $('#create-card').on('click', function(event) {
      event.preventDefault();

      var url = $(this).attr('href');


      $('#create-deck').show();
    });

    $(this).parent('.deck').remove();

  });
});






