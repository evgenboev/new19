$(document).ready(function() {
    setInterval(rotateImages, 4000);
});

function rotateImages(){
    var curPhoto = $("#photoShow div.current");
    var nxtPhoto = curPhoto.next();

    if(nxtPhoto.length == 0){
        nxtPhoto = $("#photoShow div:first");
    }

    curPhoto.removeClass("current").addClass("previous");
    nxtPhoto.css({opacity: 0.0}).addClass("current").animate({opacity: 1.0}, 1000,

        function(){
            curPhoto.removeClass("previous");
        });
}