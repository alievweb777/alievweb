




function info() {
    var kimat = $("#textarea1").val();
    if (kimat == "theme 2") {
        $("#page-top").css("background","black");
        $("#textarea1").css("color","red");
        $("#textarea1").css("font-family","New Times Roman");
        // $("#page-top").hide();
        //window.location = "http://ilmhona.org";
    }

    

    if(kimat == "theme 1" || kimat == "default") {
        $("#page-top").css("background","white");
        $("#textarea1").css("color","blue");
        $("#textarea1").css("font-family","New Times Roman");
    }
}


