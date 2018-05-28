$(function(){

    var turn = 1;
    var winner = "";
    var score;

    function house(a,b,c){
        var house1 = $("#house"+a);
        var house2 = $("#house"+b);
        var house3 = $("#house"+c);
        var bgA = $("#house"+a).css("background-image");
        var bgB = $("#house"+b).css("background-image");
        var bgC = $("#house"+c).css("background-image");
        if( (bgA == bgB) && (bgB == bgC) && (bgA != "none" && bgA != "")){
            if(bgA.indexOf("1.png") >= 0)
                winner = "1";
            else
                winner = "2";
            return true;
        }
        else{
            return false;
        }
    }

    function gameover(){
        if( house(1, 2, 3) || house(4, 5, 6) || house(7, 8, 9) ||
            house(1, 4, 7) || house(2, 5, 8) || house(3, 6, 9) ||
            house(1, 5, 9) || house(3, 5, 7)
        ){
        $("#result").html("<h1>Player " + winner + " won!</h1>");
        $(".house").off("click");
        }
    }

    $(".house").click(function(){
        var bg = $(this).css("background-image");
        if(bg == "none" || bg == ""){          
            var fig = "url(" + turn.toString() + ".png)";
            $(this).css("background", fig);
            turn = (turn == 1? 2:1); 
            gameover();
        }
    });

}); 
    