    var index = 1;
    var changeImage =()=>{
        var imgs = ["image/p1.png","image/p2.png","image/p3.png","image/p4.png","image/p5.png"];
        document.getElementById('img').src= imgs[index];
        index++;
        if (index==5)
        {
            index = 0;
        }
    }
    setInterval(changeImage,2500);

$(document).ready(()=>{
        $(window).scroll(()=>{
            if($(this).scrollTop()){
                $('#back-top').fadeIn();
            }else{
                $('#back-top').fadeOut();
            };
       });

       $('#back-top').click(()=>{
            $('html,body').animate({scrollTop:0},'slow');
       });

       $('#home').click(()=>{
        $('html,body').animate({
           scrollTop: $('#intro_pic').offset().top
        },'slow');
       });

       $('#list_music').click(()=>{
        $('html,body').animate({
           scrollTop: $('#my_favorite').offset().top
        },'slow');
       });

       $('#in4').click(()=>{
        $('html,body').animate({
           scrollTop: $('#my_profile').offset().top
        },'slow');
       });

       $('#toggle').click(()=>{
        $('nav').slideToggle()});
        
       $('#close_ads').click(()=>{
        $('#advertisement').css({
            'display':'none'
        });
       });
       $('#close_list').click(()=>{
        $('#list_video').css({
            'display':'none'
        });
       });
       $('.list_play').click(()=>{
         $('#list_video').css({
           'display':'block'
         });
       });
       $('#close_control').click(()=>{
        $('#control_video').css({
            'display':'none'
        });
       });
       $('#open_control').click(()=>{
        $('#control_video').css({
          'display':'block'
        });
      });
      $('.advance').click(()=>{
        $('#control_video').css({
            'display':'none'
          });
      });
      $('#GTV').click(()=>{
        $('#control_video').css({
            'display':'none'
          });
      });
      $('.list_play').click(()=>{
        $('#control_video').css({
            'display':'none'
          });
      });
    });
setTimeout(()=>{
    document.getElementById('advertisement').style.display= 'block';
},1200);

var ad=1;
const list_vd=[
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
    "https://www.youtube.com/embed/DXPkmoCVscs?autoplay=1&mute=1",
    "https://www.youtube.com/embed/SORD03t7nlo?autoplay=1&mute=1",
    "https://www.youtube.com/embed/jLDM2yeb5ZI?autoplay=1&mute=1"];
var changeVD =()=>{
    document.getElementById('screen').src=list_vd[ad];
    ad++;
    if(ad==list_vd.length){
        ad=0;
    }
}
var GTV=()=>{
    var go_to_video=prompt('Nhập số thứ tự bài cần chuyển đến:');
    if(go_to_video<=list_vd.length && go_to_video>0){
    document.getElementById('screen').src=list_vd[go_to_video-1];}
    else{
        alert('STT bạn nhập không tồn tại.Tự động đưa tới bài đầu tiên!!!');
        document.getElementById('screen').src=list_vd[0];
    }
}
const list_mc=[
"audio/dedendedi.mp3",
"audio/banTrenTangLau.mp3",
"audio/CangDamSauCangDauLofiVersion-NhuViet-6973559.mp3",
"audio/31072LofiVersion-DuonggNauWnFreakD-6952501_hq.mp3",
"audio/EmSayRoiLofiVersion-ThuongVoVux-6953606.mp3"
];
const name_mc=[
"PIMRYPIE [COVER] - จากกันไปง่ายๆ (Dễ Đến Dễ Đi) _ Quang Hùng MasterD (128 kbps).",
"Bên Trên Tầng Lầu Remix – Tăng Duy Tân x Th BAP (Zang Remix)",
"Càng Đậm Sâu Càng Đau (Lofi Version)",
"3 1 0 7 - 2 (Lofi Version)",
"Em say rồi (lofi version)"
];
var mc=1
var changeMC=()=>{
    document.getElementById('control_music_screen').src=list_mc[mc];
    document.getElementById('screen_music').innerHTML=name_mc[mc];
    mc++;
    if(mc==list_mc.length){
        mc=0;
    }
}
any_music=()=>{
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