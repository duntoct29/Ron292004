    var index = 1;
    changeImage = function (){
        var imgs = ["image/p1.png","image/p2.png","image/p3.png","image/p4.png","image/p5.png"];
        document.getElementById('img').src= imgs[index];
        index++;
        if (index==5)
        {
            index = 0;
        }
    }
    setInterval(changeImage,2500);
    $(document).ready(function(){
        $(window).scroll(function(){
            if($(this).scrollTop()){
                $('#back-top').fadeIn();
            }else{
                $('#back-top').fadeOut();
            };
       });
       $('#back-top').click(function(){
        $('html,body').animate({scrollTop:0},'slow');
        stop_music();
       });

       $('#home').click(function(){
        $('html,body').animate({
           scrollTop: $('#intro_pic').offset().top
        },'slow');
       });

       $('#list_music').click(function(){
        $('html,body').animate({
           scrollTop: $('#my_favorite').offset().top
        },'slow');
       });

       $('#in4').click(function(){
        $('html,body').animate({
           scrollTop: $('#my_profile').offset().top
        },'slow');
       });

       $('#toggle').click(function(){
        $('nav').slideToggle()});
        
       $('#close_ads').click(function(){
        $('#advertisement').css({
            'display':'none'
        });
        play_music();
       });
       $('#close_list').click(function(){
        $('#list_video').css({
            'display':'none'
        });
       });
       $('.list_play').click(function(){
         $('#list_video').css({
           'display':'block'
         });
       });
       $('#close_control').click(function(){
        $('#control_video').css({
            'display':'none'
        });
       });
       $('#open_control').click(function(){
        $('#control_video').css({
          'display':'block'
        });
      });
      $('.advance').click(function(){
        $('#control_video').css({
            'display':'none'
          });
      });
      $('#GTV').click(function(){
        $('#control_video').css({
            'display':'none'
          });
      });
    });
setTimeout(function(){
    document.getElementById('advertisement').style.display= 'none';
},1200);
play_music=function(){
    const music=document.querySelector('#music_html');
    music.play();
    setTimeout(function(){
        alert('Click nút mũi tên để tắt nhạc nhe 😉');
    },400)
    
};
stop_music=function(){
    const music=document.querySelector('#music_html');
    music.pause();
};

var ad=1;
var list_vd=[
    "https://www.youtube.com/embed/lpPBj3nEIiw?autoplay=1&mute=1",
    "https://www.youtube.com/embed/fOdML_XhHvQ?autoplay=1&mute=1",
    "https://www.youtube.com/embed/AvGBB367W38?autoplay=1&mute=1",
    "https://www.youtube.com/embed/PJYg0t7uEcc?autoplay=1&mute=1",
    "https://www.youtube.com/embed/rirO78rbhpw?autoplay=1&mute=1",
    "https://www.youtube.com/embed/niLWh6G49-A?autoplay=1&mute=1",
    "https://www.youtube.com/embed/RlDzHQ9D028?autoplay=1&mute=1",
    "https://www.youtube.com/embed/WvkTcNQsxzc?autoplay=1&mute=1",
    "https://www.youtube.com/embed/XyzaMpAVm3s?autoplay=1&mute=1",
    "https://www.youtube.com/embed/2CmiA0HTNos?autoplay=1&mute=1"];
changeVD =function (){
    document.getElementById('screen').src=list_vd[ad];
    ad++;
    if(ad==list_vd.length){
        ad=0;
    }
}
GTV=function(){
    var go_to_video=prompt('Nhập số thứ tự bài cần chuyển đến:');
    document.getElementById('screen').src=list_vd[go_to_video-1];
}


