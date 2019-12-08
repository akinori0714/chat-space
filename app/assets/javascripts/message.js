$(function(){

  function buildHTML(message){
    var addImage = message.content && message.image ? `<img class = "image_size", src="${message.content && message.image}">` : '' ;
      var html =
        `<div class="message" data-message_id=${message.id}>
          <div class="upper-message">
            <div class="upper-message__user-name">
              ${message.user_name}
            </div>
            <div class="upper-message__date">
              ${message.created_at}
            </div>
          </div>
          <div class="lower-message">
            <p class="lower-message__content">
              ${message.content}
            </p>
          </div>
          ${addImage}
        </div>`
      return html;
  };

  var reloadMessages = function(){
    last_message_id = $('.message:last').data('message_id');
    $.ajax({
      //ルーティングで設定した通り/groups/id番号/api/messagesとなるよう文字列を書く
      url: "api/messages",
      type: "get",
      dataType: "json",
      //dataオプションでリクエストに値を含める
      data: {id: last_message_id}
    })
    .done(function(messages){
      var insertHTML = '';
      $.each(messages, function(i, message){
        insertHTML += buildHTML(message)
      });
      $('.messages').append(insertHTML);
      $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
    })
    .fail(function(){
    });
  };
  setInterval(reloadMessages, 7000);

$('#new_message').on('submit', function(e){
 e.preventDefault();
 var formData = new FormData(this);
 var url = $(this).attr('action')
 $.ajax({
   url: url,
   type: "POST",
   data: formData,
   dataType: 'json',
   processData: false,
   contentType: false
 })
  .done(function(data){
    var html = buildHTML(data);
    $('.messages').append(html);
    $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight}, 'fast');
    $('form')[0].reset();
    $('.form__submit').prop('disabled', false);

  })
   .fail(function(){
     alert('error');
    });
    return false;  
  });
});