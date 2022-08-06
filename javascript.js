    var index = 1;
    changeImage = function (){
        var imgs = ["image/p1.png","image/p2.png","image/p3.png","image/p4.png","image/p5.png","image/pic6.png"];
        document.getElementById('img').src= imgs[index];
        index++;
        if (index==6)
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
    });
setTimeout(function(){
    document.getElementById('advertisement').style.display='block';
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

