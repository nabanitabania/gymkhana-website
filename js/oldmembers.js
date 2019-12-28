$(document).ready(function(){
    $("#vp").click(function(){
        $("#gs").hide();
        $("#cultural").hide();
        $("#technical").hide();
        $("#sports").hide();
        $("#indoor").hide();
        $("#literary").hide();
        $("#photography").hide();
        $("#dramatics").hide();
        $("#dance").hide();
        $("#music").hide();
        $("#gym").hide();
        $("#football").hide();
        $("#lawntennis").hide();
        $("#trekking").hide();
        $("#eco").hide();       
        $("#cricket").hide();
        $("#kabaddi").hide();
        $("#gr1").hide();
        $("#gr2").hide();
        $("#pg1").hide();
        $("#pg2").hide();
        $("#vp").show();
    });

    $("#middle").click(function(){
        $("#technology").hide();
        $("#sports").hide();
       $("#so-cult").show();
      
    });

    $("#right").click(function(){
        $("#technology").show();
        $("#sports").hide();
       $("#so-cult").hide();
       
    });

});

