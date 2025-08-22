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

function hideTopNavigation() {
    document.getElementById("topNavigation").style.display = "none";
    document.getElementById("megaLeft").style.display = "none";
    document.getElementById("megaRight").style.width = "100%";
}
function showTopNavigation() {
    document.getElementById("topNavigation").style.display = "";
    document.getElementById("megaLeft").style.display = "";
    document.getElementById("megaRight").style.width = "75%";
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

var clist = [
    ["Top", "top"],
    ["Games & Apps", "gamesRender"],
    ["News", "newsRender"],
    ["About Me", "aboutMe"],
    ["Website Info", "websiteInfo"],
    ["Scrap Comics", "ScrapComics"],
    ["Discord", "discordServers"],
    ["Settings", "settings"],
];

function teleport(loc){
    location.href= '#' + loc;
}

function renderContentList(){
    let render = "<h3>Content:</h3>";

    for (let c in clist){
        render = render + "<br /><button style='background-color: black; border-color: red; width: 90%; font-size: 20px; margin-bottom: 8px' onclick='teleport(`" + clist[c][1] + "`)'>" + clist[c][0] + "</button>";
    }

    document.getElementById("contentList").innerHTML = render;
}

const comics = [
    "chapter1/chapter1part1",
    "chapter1/chapter1part2",
    "chapter1/chapter1part3",
    "chapter1/chapter1part4",
    "chapter1/chapter1part5",
    "chapter1/chapter1part6",
    "chapter1/chapter1part7",
    "chapter1/chapter1part8",

    "chapter2/chapter2part1",
    "chapter2/chapter2part2",
    "chapter2/chapter2part3",
    "chapter2/chapter2part4",
    "chapter2/chapter2part5",
    "chapter2/chapter2part6",
    "chapter2/chapter2part7",
    "chapter2/chapter2part8",
    "chapter2/chapter2part9",

    "chapter3/chapter3part1",
    "chapter3/chapter3part2",
    "chapter3/chapter3part3",
    "chapter3/chapter3part4",
];

var currentComic = 0;

function toggleComics() {
    if (document.getElementById("ComicReader").style.display == "none") {
        // show
        document.getElementById("ComicReader").style.display = "";
        currentComic = 0;
        document.getElementById("currentComic").src = "images/scrapcomics/" + comics[0] + ".png";
    }
    else {
        document.getElementById("ComicReader").style.display = "none";
    }
}

function previousComic() {
    if (currentComic > 0) {
        currentComic--;
        document.getElementById("currentComic").src = "images/scrapcomics/" + comics[currentComic] + ".png";
    }
}

function nextComic() {
    currentComic++;
    if (currentComic > comics.length - 1) currentComic = 0;
    document.getElementById("currentComic").src = "images/scrapcomics/" + comics[currentComic] + ".png";
}

function updateUI() {
    updateSettings();

    renderContentList();
    renderGames();
    renderGamesFilters();
}

/*
document.getElementById("theForm").addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = {
        text: document.getElementById('text').value,
        author: document.getElementById('author').value,
        fileName: document.getElementById("fileUpload").files[0]?.name
    };
    //console.log('Form data:', formData);

    const webhookUrl = 'https://discord.com/api/webhooks/1396486582487220305/_BoKIhOl4tPtRVlCNxFu7B6WNytlOibM2LzuspPdI6b2o6YCC-RijvILrJifOckYCMsh';

    try {
        let discordData = new FormData();
        let file = document.getElementById("fileUpload").files[0];

        if (file) {
            discordData.append('file', file);
        }

        discordData.append('payload_json', JSON.stringify({
            content: formData.text + (formData.author != "" ? " - " + formData.author : ""),
            embeds: [{
                title: formData.text,
                fields: [
                    //{ name: 'One:', value: formData.name || 'x' },
                    { name: 'Important: ', value: formData.author || 'y' },
                    //{ name: 'Three:', value: file ? file.name : 'z' }
                ],
                timestamp: new Date().toISOString()
            }]
        }));

        await fetch(webhookUrl, {
            method: 'POST',
            body: discordData
        });

        document.getElementById("theForm").reset();
        //fileName.textContent = 'No file chosen';

    } catch (error) {
        console.error('Error:', error);
    }
});
*/


updateUI();