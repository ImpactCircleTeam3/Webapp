var bubbleId = null

$.ajax({
  url: '/api/get-working-bubble',
  success: function(data) {
    bubbleId = data.id
    $('#bubble-id').text(data.id)
    if (data.hashtags.length === 0){
      $('#bubble-hashtag').text("No Hashtags in bubble")
    }
    else {
      $('#bubble-hashtag').text(data.hashtags.join(", "))
    }
  }
})


$("[name='hashtag-row']").click(function(e) {
  $.ajax({
    url: '/api/update-bubble',
    method: "put",
    data: {
      id: bubbleId,
      newHashtag: $(this).attr("data-value")
    },
    success: function (data){
      $('#bubble-hashtag').text(data.hashtags.join(", "))
    }
  })
})


$("#bubble-ready").click(function (e){
  $.ajax({
    url: '/api/start-bubble',
    method: 'post',
    data: {
      id: bubbleId
    },
    success: function (data){
      bubbleId = data.id
      $('#bubble-id').text(data.id)
      $('#bubble-hashtag').text(data.hashtags.join(", "))
    }
  })
})