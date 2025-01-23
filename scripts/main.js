var schrottiisGamesTitle = document.getElementById("schrottiisGamesTitle");
var gamesTitleAnim = 0;

setInterval(() => {
    schrottiisGamesTitle.style.color = ["#75FFFF", "#FFCCF8", "white", "#FFCCF8", "#75FFFF", "yellow", "black"][gamesTitleAnim];
    gamesTitleAnim = (gamesTitleAnim + 1) % 6;
}, 1000);

var settings = {
    playtype: 0,
    localdir: "",
}

function settingPlayType() {
    settings.playtype = (settings.playtype + 1) % 4;

    renderGames();
    updateSettings();
}

function handleDirectPlay(directPlay, gameGit, gameGalaxy) {
    // Function to handle the direct play button
    // directPlay -> gathered from the first link, usually a link to the game's main website hosted on github, used for "Online" type
    // gameGit -> github repo name, used for "Local" type
    // gameGalaxy -> game ID on galaxy, if available, used for "Galaxy" type

    let constructedLink = "";

    if (settings.playtype == 3 && settings.localdir != "" && settings.localdir != undefined) {
        // local, needs that localdir setting
        constructedLink = getLocalPath() + gameGit + "/index.html";
    }
    else if (settings.playtype == 2 && gameGalaxy != undefined && gameGalaxy != "undefined") {
        // galaxy
        constructedLink = "https://galaxy.click/play/" + gameGalaxy;
    }
    else {
        // web/online, opens whether you set it to web or galaxy does not exist
        constructedLink = directPlay;
    }

    window.open(constructedLink, "_self")
}

function settingLocalDir() {
    settings.localdir = prompt("New location for local playing? Example: C:/Users/Admin/source/repos/");

    updateSettings();
}

function getLocalPath() {
    return "file:///" + settings.localdir + (settings.localdir.substr(-1) == "/" ? "" : "/");
}

function updateSettings() {
    document.getElementById("settingPlayType").innerHTML = "Direct Play: " + ["OFF", "Web", "Galaxy", "Local"][settings.playtype];

    document.getElementById("settingLocalDir").style.display = settings.playtype == 3 ? "" : "none";
    document.getElementById("settingLocalDir").innerHTML = "Local Dir: " + settings.localdir;

    localStorage.setItem("SchrottiiWebsite", JSON.stringify(settings));
}

if (localStorage["SchrottiiWebsite"] != undefined) {
    settings = JSON.parse(localStorage.getItem("SchrottiiWebsite"));
}
updateSettings();

renderGames();
renderGamesFilters();