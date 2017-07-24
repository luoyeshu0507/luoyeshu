$(function() {
  $('.img-wrap').on('click','img',function(){
    $body = $('body').append($('<div id="c-display-imgbg"></div>'))
    .append($('<div class="c-display-imgwrap"></div>').append($('<img>').attr('src',$(this).attr('src').split('-w')[0] + '-w1000watermark')));
    $('#c-display-imgbg, .c-display-imgwrap').click(function(){
        $('#c-display-imgbg, .c-display-imgwrap').remove();
    });
    $('.c-display-imgwrap img').click(function(){
        return false;
    });
    addExif(this);
    return false;
  });
});

function addExif(img) {
  var url = img.src.replace('-w200', '') + '?exif';
  $.ajax({
    url: url,
    type:'GET',
    dataType:"JSON",
    success: function(data){
      var html = '<div class="exif">Image Info<div class="photo-info"><p><span class="info-name">Brand：</span><span class="info-content">' + data.Make.val + '</span></p><p><span class="info-name">Type：</span><span class="info-content">' + data.Model.val + '</span></p><p><span class="info-name">Aperture ：</span><span class="info-content">' + data.FNumber.val + '</span></p><p><span class="info-name">ExposureTime ：</span><span class="info-content">' + data.ExposureTime.val + '</span></p><p><span class="info-name">ExposureBiasValue ：</span><span class="info-content">' + data.ExposureBiasValue.val + '</span></p><p><span class="info-name">Time ：</span><span class="info-content">' + data.DateTimeOriginal.val + '</span></p></div></div>';
      $('.c-display-imgwrap').append(html);
    },
    error:function(e){
      console.log('get competition list error');
    }
  });
}


