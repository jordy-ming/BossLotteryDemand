
var allPerson = "1;2;3;4;5;6;7;8;9;10;11;12;13;14;15;16;17;18;19;20;21;22;23;24;25;26;27;28;29;30;31;32;33;34;35;36;37;38;39;40;41;42;43;44;45";
var leaderArr = [];
var remainPerson = allPerson.toString().split(";");
var luckyMan = [];
var timer;
var times = 1;
$(function () {
    $("#btnStart").on("click", function () {
        if ($("#btnStart").text() === "开始") {
            if (remainPerson.length <= 0) {
                showDialog("错误，已经无数据可以抽了");
                return false;
            }
            move();
            $("#btnStart").text("停止");
        }
        else {
            $("#btnStart").text("开始");
            clearInterval(timer);
            startLuckDraw();
        }
    });
});

function startLuckDraw() {

    var luckyDrawNum = 1;
    if (luckyDrawNum > remainPerson.length) {
        alert("错误，已经无数据可以抽了");
        return false;
    }
    console.log(remainPerson)
    var randomPerson = getRandomArrayElements(remainPerson, luckyDrawNum);
    //
    remainPerson = remainPerson.delete(randomPerson);
    //
    luckyMan = luckyMan.concat(randomPerson);
    $("#s1").hide();
    $("#s3").hide();
    $("#s2").text(randomPerson[0]);
    $("#s4").text($("#s4").text()+randomPerson[0]+";");
    console.log(remainPerson)
}
function move() {
    $("#s1").show();
    $("#s3").show();
    var $showName = $("#showName"); 
    var interTime = 30;
    timer = setInterval(function () {
        $("#s2").text(remainPerson[GetRandomNum(0, remainPerson.length)]);
        $("#s1").text(remainPerson[GetRandomNum(0, remainPerson.length)]);
        $("#s3").text(remainPerson[GetRandomNum(0, remainPerson.length)]);
    }, interTime);
}
