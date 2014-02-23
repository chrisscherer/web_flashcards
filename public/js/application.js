$(document).ready(function() {
  var counter = 0;

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
        console.log(serverResponse);
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

    var url = $(this).attr('action');
    var data = $(this).serialize();

    if (counter == 1) {
      $('tr').append("<th id='answer'>Answer</th>");
      $('tr').append("<th id='question'>Question</th>");
    };

    $.post(url, data, function(serverResponse, status, request) {
      $('tbody').append('<tr><td>'+sideOne+'</td><td>'+sideTwo+'</td></tr>');
      $('#side-one').val('');
      $('#side-two').val('');
    });
  });

  $('#finish-deck').on('click', function(event) {
    event.preventDefault();
    var url = $(this).attr('href');
    $.get(url, function(serverResponse, status, request) {
      $('#deck-info').hide();
      $('#card-table').hide();
      $('.card').remove();
      $('#create-deck').show();
      location.reload(); // NEED TO FIGURE OUT WHY MULTIPLE DECK FORMS ARE SHOWING UP
    })
  });

  $('#guess-sub').on('submit', function(event) {
    event.preventDefault();
    // Trigger card flip
    // Trigger feedback
  });
});

