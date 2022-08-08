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
      $('.list_play').click(function(){
        $('#control_video').css({
            'display':'none'
          });
      });
    });
setTimeout(function(){
    document.getElementById('advertisement').style.display= 'block';
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
    "https://www.youtube.com/embed/8yRgYiNH39E?autoplay=1&mute=1",
    "https://www.youtube.com/embed/lpPBj3nEIiw?autoplay=1&mute=1",
    "https://www.youtube.com/embed/fOdML_XhHvQ?autoplay=1&mute=1",
    "https://www.youtube.com/embed/AvGBB367W38?autoplay=1&mute=1",
    "https://www.youtube.com/embed/PJYg0t7uEcc?autoplay=1&mute=1",
    "https://www.youtube.com/embed/rirO78rbhpw?autoplay=1&mute=1",
    "https://www.youtube.com/embed/niLWh6G49-A?autoplay=1&mute=1",
    "https://www.youtube.com/embed/RlDzHQ9D028?autoplay=1&mute=1",
    "https://www.youtube.com/embed/WvkTcNQsxzc?autoplay=1&mute=1",
    "https://www.youtube.com/embed/XyzaMpAVm3s?autoplay=1&mute=1",
    "https://www.youtube.com/embed/2CmiA0HTNos?autoplay=1&mute=1",
    "https://www.youtube.com/embed/sNcLsXqC4PY?autoplay=1&mute=1",
    "https://www.youtube.com/embed/79AMY0iycL8?autoplay=1&mute=1",
    "https://www.youtube.com/embed/FJ2d-FPqDGE?autoplay=1&mute=1",
    "https://www.youtube.com/embed/ifKKhj03TVM?autoplay=1&mute=1",
    "https://www.youtube.com/embed/DXPkmoCVscs?autoplay=1&mute=1"];
changeVD =function (){
    document.getElementById('screen').src=list_vd[ad];
    ad++;
    if(ad==list_vd.length){
        ad=0;
    }
}
GTV=function(){
    var go_to_video=prompt('Nhập số thứ tự bài cần chuyển đến:');
    if(go_to_video<=list_vd.length && go_to_video>0){
    document.getElementById('screen').src=list_vd[go_to_video-1];}
    else{
        alert('STT bạn nhập không tồn tại.Tự động đưa tới bài đầu tiên!!!');
        document.getElementById('screen').src=list_vd[0];
    }
}
var list_mc=[
"audio/dedendedi.mp3",
"audio/banTrenTangLau.mp3",
"audio/CangDamSauCangDauLofiVersion-NhuViet-6973559.mp3",
"audio/31072LofiVersion-DuonggNauWnFreakD-6952501_hq.mp3",
"audio/EmSayRoiLofiVersion-ThuongVoVux-6953606.mp3"
];
var name_mc=[
"PIMRYPIE [COVER] - จากกันไปง่ายๆ (Dễ Đến Dễ Đi) _ Quang Hùng MasterD (128 kbps).",
"Bên Trên Tầng Lầu Remix – Tăng Duy Tân x Th BAP (Zang Remix)",
"Càng Đậm Sâu Càng Đau (Lofi Version)",
"3 1 0 7 - 2 (Lofi Version)",
"Em say rồi (lofi version)"
];
var mc=1
changeMC=function(){
    document.getElementById('control_music_screen').src=list_mc[mc];
    document.getElementById('screen_music').innerHTML=name_mc[mc];
    mc++;
    if(mc==list_mc.length){
        mc=0;
    }
}
any_music=function(){
    var input=prompt('Nhập số thứ tự bài hát cần chuyển:')
    if(input<=list_mc.length && input>0){
        document.getElementById('control_music_screen').src=list_mc[input-1];
        document.getElementById('screen_music').innerHTML=name_mc[input-1];
    }
    else{
        alert('STT bạn nhập không tồn tại.Tự động chạy bài đầu tiên!!!');
        document.getElementById('control_music_screen').src=list_mc[0];
        document.getElementById('screen_music').innerHTML=name_mc[0];
    }
}