$(document).ready(function(){
    // * $(".className")
    // * $("#idname")
    // * $("tagname")
    // * $("tagname.className")
    // * $("tagname#idName")
    // * $("tagname[attribute=value]")
    // * $("tagname[attribute]")

    $(".box").click(function () {
        // $(this).toggleClass("active");

        $(".box").fadeOut(500, function(){
            // $(".box").remove();

            $(".box").fadeIn(500, function(){
                $(".box").css("background-color", "red");
                $(".box").html("I am the box element");
            });
        });
    });
});