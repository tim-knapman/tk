$(document).ready(function(e) {
    $('#toggle').click(function(){
        $('#toggle').toggleClass('active');
        $('.mobilemenu').toggleClass('open');
        $('.menu-container').toggleClass('menu-nav');
        return false;   
    });
    
    $('nav.mobmenu a').click(function(){
        $('.mobilemenu').toggleClass('open');
        $('#toggle').toggleClass('active');
    });
});

