var schrottiisGamesTitle = document.getElementById("schrottiisGamesTitle");
var gamesTitleAnim = 0;

setInterval(() => {
    schrottiisGamesTitle.style.color = ["#75FFFF", "#FFCCF8", "white", "#FFCCF8", "#75FFFF", "yellow", "black"][gamesTitleAnim];
    gamesTitleAnim = (gamesTitleAnim + 1) % 6;
}, 1000);