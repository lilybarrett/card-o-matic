$('.colors').click(function() {
  var chosen_color = $(this).css('background-color');
  $('#canvas').css('background-color', chosen_color);
  $('.textures').css('background-color', chosen_color);
});

$('.textures').click(function() {
  var chosen_image = $(this).css('background-image');
  $('#canvas').css('background-image', chosen_image);
})

$('.messages').click(function() {
  var radio_button = $(this);
  var label = radio_button.next();
  var message = label.html();
  $('#message-output').html(message);
});

$('#recipient').keyup(function() {
  var recipient = $(this).val();
  $('#recipient-output').html(recipient);
  var length = recipient.length
  if (length == 14) {
    $('#recipient-error').html("Max characters: 14");
  }
  else {
    $('#recipient-error').html("");
  }
});

$('.stickers').click(function() {
  var new_sticker = $(this).clone();
  new_sticker.addClass('stickers_on_card');
  $('#canvas').prepend(new_sticker);
  new_sticker.draggable({containment:'#canvas', opacity: 0.2});
});

$('#refresh-btn').click(function() {
  $('#canvas').css('background-color', 'white');
  $('#canvas').css('background-image', '');

  $('#message-output').html('');
  $('#recipient-output').html('');

  $('.stickers_on_card').remove();
});
