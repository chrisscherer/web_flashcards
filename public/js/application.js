$(document).ready(function() {
  var counter = 0;
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
      // Redirect window thing
    });
  });

  $('#create-deck').on('click', function(event) {
    event.preventDefault();
    var url = $(this).attr('href');
    $('#create-deck').hide();

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

    $.post(url, data, function(serverResponse, status, request) {
      $('#deck-title').append('Deck Title: ' + title);
      $('#deck-description').append('Deck Description: ' + description);
      $('#create-card').append('Add a card');
    });

    $('#create-card').on('click', function(event) {
      event.preventDefault();

      var url = $(this).attr('href');
      $.get(url, function(serverResponse, status, request) {
        $('#create-card').hide();
        $('.container').append(serverResponse);
      })
    });

    $(this).parent('.deck').remove();

  });

  $('.card').on('submit', '#create-card',function(event) {
    event.preventDefault();

    counter++;

    var sideOne = $('input[name=side_one]').val();
    var sideTwo = $('input[name=side_two]').val();

    console.log(this);
    var url = $(this).attr('action');
    console.log(url);
    var data = $(this).serialize();

    if (counter == 1) {
      $('tr').append("<th id='answer'>Answer</th>");
      $('tr').append("<th id='question'>Question</th>");
    };

    $.post(url, data, function(serverResponse, status, request) {
      console.log(serverResponse);
      $('tbody').append('<tr><td>'+sideOne+'</td><td>'+sideTwo+'</td></tr>');
      $('').val('');
    });

    // $(this).parent('div').remove(); // Move this around

  });

  $('#finish-deck').on('click', function(event) {
    event.preventDefault();
    $('#create-deck').show();
  });

});






