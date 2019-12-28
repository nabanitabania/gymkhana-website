$(document).ready(function(){
    $("#left").click(function(){
        $("#so-cult").hide();
       $("#technology").hide();
        $("#sports").show();
       
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

