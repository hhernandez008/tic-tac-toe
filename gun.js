var pw = $('#pointer-wrap');
var offset = pw.offset();

function mouse(e) {
    var center_x = (offset.left) + ( $('#pointer-wrap').width() / 2 );
    var center_y = (offset.top) + ( $('#pointer-wrap').height() / 2 );
    var radians = Math.atan2(e.pageX - center_x, e.pageY- center_y);
    var degree = (radians * (180 / Math.PI) * -1) + 180;
    console.log(e.clientX);
    if(e.clientX<1200){
        pw.css('-webkit-transform', 'rotate3d(-2,0, 1,'+degree+'deg)');
    }else{
        pw.css('-webkit-transform', 'rotate3d(2,0, 1,'+degree+'deg)');
    }






}

$('.board-one').mousemove(mouse);