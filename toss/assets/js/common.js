
/////main/////
$(document).ready(function(){
    var max_h=0;
    $(".pc-gnb > li > ul").each(function(){
          var h = parseInt($(this).css("height"));
          if(max_h<h){ max_h = h; }
    });
    $(".pc-gnb > li > ul").each(function(){
          $(this).css({height:max_h});
    });
});
//모든 '.pc-gnb > li > ul'의 높이 : 최고 긴 값의 높이

var gnbMenuHover = (function () {     
    $(document).on("mouseenter", ".pc-gnb > li", function(){           
        $(this).addClass('on');          
        $('.pc-gnb > li').find('> ul').show();    
        $('.header').stop().animate({
            height : (($('.pc-gnb > li > ul').innerHeight()) + 112) + 'px'
        },350);
    });
    $(document).on("mouseleave", ".pc-gnb > li", function(){
        $(this).removeClass('on');          
        $('.pc-gnb > li').find('> ul').hide();
        $('.header').stop().animate({
            height : '112px'
        },200);
    });      
    return false;
})();
//pc-web-gnb hover end;


var sitemapOpen = (function () {
    $(document).on("click", ".smap-icon", function(){
        $(this).toggleClass('on');    
        $('.sitemap-dim').fadeToggle(150);        
        $('.sitemap').slideToggle(400);        
        $('body').toggleClass('band');
    });
})();   
//pc-sitemap open end;


var mobMenuOpen = (function () {
    $(document).on("click", ".mob-menu", function(){
        $(this).toggleClass('on');         
        $('.mob-gnb-area').toggleClass('on');        
        $('body').toggleClass('band');
    });
})();  
//mob-gnb open end;


var MobMenuDepthOpen = (function () {
    $(document).on("click touch", ".mob-gnb >  li > a", function(){
        var $parent =  $(this).parent();
        if( $parent.hasClass("on") ){
            $parent.removeClass("on");
            $parent.children("ul").stop().slideUp();
        }else{
            $(".mob-gnb>  li").removeClass("on");
            $(".mob-gnb>  li > ul").stop().slideUp();
            $parent.addClass("on");
            $parent.children("ul").stop().slideDown();
        }
        return false;
    });
})(); 
//mob-gnb depth open end;



//quickmenu start
var quickmenu = (function () {
    $(document).on('scroll', window, function(){
        if ( $( this ).scrollTop() > 1 ) {
            $( '.totop-btn' ).fadeIn(200);
        } else {
            $( '.totop-btn' ).fadeOut(200);
        }
    } );
    $(document).on('click', ".totop-btn", function(){
        $( 'html, body' ).animate( { scrollTop : 0 }, 400 );
        return false;
    } );
})();   
//quickmenu end;



