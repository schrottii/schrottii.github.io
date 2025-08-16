// Game class
class Game {
    constructor(name, version, image, config){
        this.name = name;
        this.version = version;
        this.image = image;
        
        if (config != undefined) {
            this.config = config;

            if (this.config.git != undefined) this.git = this.config.git;
            if (this.config.git != undefined) this.galaxy = this.config.galaxy;
            if (this.config.desc != undefined) this.desc = this.config.desc;
            if (this.config.links != undefined) this.links = this.config.links;
            if (this.config.info != undefined) this.info = this.config.info;
        }
    }

    render(){
        let ren = `<div class="gameDiv"><div style="display: inline-block; width: 50%"><img class="gameImg" src="images/games/` + this.image
            + `" /></div><div style="display: inline-block; width: 50%"><h2>` + this.name + " v" + this.version + `</h2>`;
        if (this.links != undefined) {
            ren = ren + "<h3>";
            for (var lin in this.links) {
                ren = ren + `<button>` +
                    (this.links[lin][1].substr(0, 4) == "Play" ? `<img src="images/gameinfo/play.png" /> ` : ``)
                    + `<a href="` + this.links[lin][0] + `"><b>` + this.links[lin][1] + `</b></a></button>  `;
            }
            ren = ren + `</h3>`;
        }
        ren = ren + `</div>`;

        if (this.info != undefined) {
            ren = ren + "<hr><div style='font-size: 16px; display: table;'><div style='display: table-cell; width: 10%;'><img src='images/gameinfo/"
                + this.getInfo("activity") + ".png'>" + this.getInfo("activity2")
                + "</div><div style='display: table-cell; width: 10%;'>" + this.renderGenre()
                + "</div><div style='display: table-cell; width: 10%;'>" + this.renderRating()
                + "</div></div>";
        }
        if (settings.playtype != 0 && this.git != undefined) { // direct play, don't show it if disabled or this is not a playable game/app
            ren = ren + "<hr><button style='min-width: 20%; min-height: 48px; font-size: 32px' onclick='handleDirectPlay(`" + this.links[0][0] + "`, `" + this.git + "`, `" + this.galaxy + "`)'>"
                + `<img src="images/gameinfo/play.png" height=32px /> `
                + (settings.playtype == 2 && this.galaxy != undefined ? "G A L A X Y" : "P L A Y") + "</button>";
        }
        if (this.desc != undefined) {
            ren = ren + "<hr><br />" + this.desc;
        }
        ren = ren + "</div>";

        return ren;
    }

    renderGenre() {
        return "<img src='images/gameinfo/apptype.png'> " + this.getInfo("type").substr(0, 1).toUpperCase() + this.getInfo("type").substr(1) + " <img src='images/gameinfo/genre.png'> " + this.getInfo("genre");
    }

    renderRating() {
        return "<img src='images/gameinfo/star.png'>".repeat(this.getInfo("rating")) + "<img src='images/gameinfo/nostar.png'>".repeat(5 - this.getInfo("rating"));
    }

    getInfo(info) {
        // gets the state of an info segment utilizing the infoContent list
        return this.info[infoContent.indexOf(info)];
    }

    filter(info) {
        // filters based on if this game's info is the same as the filter setting is set to
        return gamesFilters[info] == "all" || gamesFilters[info] == this.getInfo(info);
    }

    filterAll() {
        // returns true if all filters apply
        for (let info in infoContent) {
            if (this.filter(infoContent[info]) == false) return false;
        }
        return true;
    }
}

var showGameFilters = false;
var infoContent = ["activity", "activity2", "type", "genre", "rating"];
var gamesFilters = {

};
for (let info in infoContent) {
    gamesFilters[infoContent[info]] = "all";
}

// Render Games
var gamesRender = document.getElementById("gamesRender");
var gamesFiltersRender = document.getElementById("gamesFiltersRender");
function renderGames() {
    let render = "";

    for (g in games) {
        if (games[g].filterAll()) {
            render = render + games[g].render();
        }
    }

    gamesRender.innerHTML = render;
}

// filters
function renderGamesFilters() {
    let render = "<button onclick='toggleFilters()'>" + (showGameFilters ? "Hide" : "Show") + " Filters</button>   ";

    if (showGameFilters) {
        render = render + "Filter options:";

        render = render + "<br />Content types: ";
        render = render + "<button style='background-color: " + (gamesFilters["type"] == "all" ? "#FDB1E4" : "#7A2C68") + "' onclick='gamesFilter(`type`, `all`)'>All types</button>";
        render = render + "<button style='background-color: " + (gamesFilters["type"] == "game" ? "#FDB1E4" : "#7A2C68") + "' onclick='gamesFilter(`type`, `game`)'>Games</button>";
        render = render + "<button style='background-color: " + (gamesFilters["type"] == "tool" ? "#FDB1E4" : "#7A2C68") + "' onclick='gamesFilter(`type`, `tool`)'>Tools</button>";
        render = render + "<button style='background-color: " + (gamesFilters["type"] == "minecraft" ? "#FDB1E4" : "#7A2C68") + "' onclick='gamesFilter(`type`, `minecraft`)'>Minecraft mods</button>";

        render = render + "<br />Activity: ";
        render = render + "<button style='background-color: " + (gamesFilters["activity"] == "all" ? "#FDB1E4" : "#7A2C68") + "' onclick='gamesFilter(`activity`, `all`)'>All activities</button>";
        render = render + "<button style='background-color: " + (gamesFilters["activity"] == "active" ? "#FDB1E4" : "#7A2C68") + "' onclick='gamesFilter(`activity`, `active`)'>Active</button>";
        render = render + "<button style='background-color: " + (gamesFilters["activity"] == "semiactive" ? "#FDB1E4" : "#7A2C68") + "' onclick='gamesFilter(`activity`, `semiactive`)'>Semi-Active</button>";
        render = render + "<button style='background-color: " + (gamesFilters["activity"] == "done" ? "#FDB1E4" : "#7A2C68") + "' onclick='gamesFilter(`activity`, `done`)'>Done</button>";

        render = render + "<br /><br />";
    }

    gamesFiltersRender.innerHTML = render;
}

function gamesFilter(infoType, filterTo) {
    gamesFilters[infoType] = filterTo;

    renderGamesFilters();
    renderGames();
}

function toggleFilters() {
    showGameFilters = !showGameFilters;

    renderGamesFilters();
}

// List of games, edit here
const games = {
    shgabbClicker: new Game("Shgabb Clicker", "3.9.1", "shgabb_clicker.png", {
        git: "shgabb-clicker",
        galaxy: 488,
        desc: "Shgabb Clicker is my largest idle game, based on one of my best friends, shgabb, and his mysterious name & lore. The game contains many currencies, 150+ Achievements, 75+ Artifacts, minigames such as fishing and more! Updates are released frequently. (2023-)",
        links: [['https://schrottii.github.io/shgabb-clicker/', 'Play Online'], ['https://shgabb-clicker.fandom.com/wiki/Shgabb_Clicker_Wiki', 'Wiki'], ['https://galaxy.click/play/488', 'Play on galaxy'], ['https://schrottii.github.io/shgabb-clicker/patch-notes.txt', 'All Updates']],
        info: ["active", "Active (2023-)", "game", "Idle", 4],
    }),

    sc2fmfr: new Game("SC2FMFR", "3.6.1", "sc2fmfr.png", {
        git: "sc2fmfr",
        galaxy: 474,
        desc: "SC2FMFR is my huge mod of Scrap Clicker 2 Fanmade by <a href='https://veprogames.github.io/'>VeproGames</a>, based on the original Scrap Clicker 2. It is by far the biggest and best mod of that game, it's basically its own game at this point. It takes weeks to complete. This idle game has dozens of features, currencies, 275 achievements, 1000 barrels, and so much more! (2021-2023)",
        links: [['https://schrottii.github.io/sc2fmfr', 'Play Online'], ['https://galaxy.click/play/474', 'Play on galaxy'], ['https://www.mediafire.com/file/oi6i8vi7domjs05/sc2fmfr-3.6.1.apk/file', '3.6.1 APK Download (Mediafire)'], ['https://discord.gg/KgK3AgMfaC', 'FR and other mods server']],
        info: ["semiactive", "Semi-Active (2021-2022, 2023+)", "game", "Idle", 4],
    }),

    rainCollector: new Game("Rain Collector", "1.8.3", "rain_collector.png", {
        git: "rain-collector",
        desc: "An idle game based on the concept of collecting things. Collect raindrops and other things, to buy upgrades and watch the numbers go up! (2024-)",
        links: [['https://schrottii.github.io/rain-collector/', 'Play Online'], ['https://schrottii.github.io/rain-collector/patch-notes.txt', 'All Updates']],
        info: ["active", "Active (2024-)", "game", "Idle", 3],
    }),

    toastyBird: new Game("Toasty Bird", "1.5.1", "toasty_bird.png", {
        git: "toasty-bird",
        desc: "Toasty Bird is a Flappy Bird-like retro arcade casual game. Hop through the pipes and get as many points as you can! Collect Coins and buy Skins and Skills. (2024-)",
        links: [['https://schrottii.github.io/toasty-bird/', 'Play Online'], ['https://cdn.discordapp.com/attachments/1212720406155493406/1216502903804526602/InShot_20240310_223749830.mp4?ex=66009f9d&is=65ee2a9d&hm=150ebbf5e9924510b0fd696b03f5b1d3020d42848b5c271d9fd1e06c8d8b5d14&', 'Trailer']],
        info: ["active", "Active (2024-)", "game", "Action", 4],
    }),

    screwedSquares: new Game("Screwed Squares", "1.1", "screwed_squares.png", {
        git: "screwed-squares",
        desc: "My latest game is simple: you click the Screws in the right order to get rid of the Squares. How long can you survive, how many points can you get? (2025-)",
        links: [['https://schrottii.github.io/screwed-squares/', 'Play Online']],
        info: ["semiactive", "Semi-Active (2025-)", "game", "Action", 3],
    }),

    nameMixer: new Game("Barrel Name Mixer", "2.0", "barrelnamemixer.png", {
        git: "barrelnames",
        desc: "This tool/game lets you combine barrels from Scrap Clicker 2. Their names and images get mixed. There are a few different ways to mix them, and favorites can be saved. See the barrels you have found in the Barrel Book and combine the ones you want to see! (2022-2025)",
        links: [['https://schrottii.github.io/barrelnames/', 'Play Online'], , ['https://schrottii.github.io/barrelnames/patch-notes.html', 'All Updates']],
        info: ["done", "Done (2022-2025)", "tool", "Tools", 4],
    }),

    quoteQuiz: new Game("QuoteQuiz", "1.6", "quotequiz.png", {
        git: "quotequiz",
        desc: "QuoteQuiz, released in December 2023, is a niche quiz based on the quotes of the people of Toast and Scrap! Can you guessed who said these wise words? Can you get all trophies? 200 questions. If you are not part of the Toast community, it's probably pretty hard to play. The final update added a collection of quotes and many new modes to play. (2023-2025)",
        links: [['https://schrottii.github.io/quotequiz/', 'Play Online'], ['https://schrottii.github.io/quotequiz/patchnotes.txt', 'All Updates']],
        info: ["done", "Done (2023-2025)", "game", "Quiz", 2],
    }),

    idleBar: new Game("Idle Bar", "1.6.9", "idle_bar.png", {
        git: "idle-bar-lite",
        desc: "Idle Bar was my first proper webgame, co-deved with someone else who offered and integrated access to a server, which granted this game unique features like ingame leaderboards and server-side saves. About 5 currencies, about 20 upgrades, about 50 trophies, Quests and more. The full version is not available anymore due to the lack of a server. However, since March 2024, a lite version without the server features is available! (2020-2022)",
        links: [['https://schrottii.github.io/idle-bar-lite/', 'Play Online (Lite)'], ['https://idle-bar.fandom.com/wiki/Idle_Bar_Wiki', 'Wiki']],
        info: ["done", "Done (2020-2022)", "game", "Idle", 2],
    }),

    scrapRPG: new Game("ScrapRPG", "1.0.3", "scraprpg.png", {
        git: "scraprpg",
        desc: "After almost four years of troublesome development and breaks, ScrapRPG finally saw the day of light on August 13th! Licensed by Schrott Games, it is the biggest Scrap fangame. Explore, fight and help the NPCS! There are not many maps yet, but they keep coming steadily. Are you ready for an adventure?",
        links: [['https://schrottii.github.io/scraprpg/', 'Play Online'], ['https://github.com/schrottii/scraprpg/releases/', 'Windows .zip download'], ['https://youtu.be/NeWvscHFotI', 'Release Trailer (YouTube)']],
        info: ["active", "Active (2021-2025)", "game", "RPG", 1]
    }),

    lunaudio: new Game("Lunaudio", "1.0", "lunaudio.png", {
        desc: "Lunaudio is an audio player that automatically detects .mp3 and other formats in its folders and plays them smoothly. Windows only (2025-)",
        links: [['https://github.com/schrottii/lunaudio', 'Github page'], ['https://github.com/schrottii/lunaudio/releases/tag/1.0', 'Windows download']],
        info: ["active", "Active (2025-)", "tool", "Audio player", 3],
    }),

    combCalc: new Game("CombCalc", "1.4.1", "combcalc.png", {
        git: "combcalc",
        desc: "This tool assists you with the nerdy and mathematical side of Scrap Clicker 2. It tells you the status of the Global Challenge, and offers various calculators. (2024-)",
        links: [['https://schrottii.github.io/combcalc/', 'Use Online'], ['https://schrottii.github.io/combcalc/patch-notes.txt', 'All Updates']],
        info: ["semiactive", "Semi-Active (2024-)", "tool", "Tools", 3],
    }),

    wggj: new Game("WGGJ", "1.3", "wggj.png", {
        desc: "WGGJ (WebGame Graphics Javascript) is a simple framework making it easier to generate Canvas graphics and manage objects. I mostly made this for myself, but if anyone out there has JS experience and wants to make a webgame, this is a good tool. (2024-)",
        links: [['https://github.com/schrottii/wggj', 'Github page'], ['https://schrottii.github.io/wggj/', 'Visual example'], ['https://schrottii.github.io/wggj/README.md', 'Readme']],
        info: ["active", "Active (2024-)", "tool", "Framework", 3],
    }),

    fisecraft: new Game("Fisecraft", "1.3", "fisecraft.png", {
        desc: "My first Minecraft mod. It adds a bit of everything: a new armor and tool set, several building blocks, mobs, some food, some teleportation items and more. It adds 78 recipes, 33 blocks, 33 items, 4 mobs (1 boss) and 2 structures. (2024-)",
        links: [['https://curseforge.com/minecraft/mc-mods/fisecraft', 'Curseforge page'], ['https://www.curseforge.com/minecraft/mc-mods/fisecraft/files/', 'Curseforge download'], ["https://modrinth.com/mod/fisecraft", "Modrinth"]],
        info: ["semiactive", "Semi-Active (2024-)", "minecraft", "Minecraft mod", 3],
    }),

    easydyes: new Game("Easy Dyes", "1.0", "easy_dyes_logo.png", {
        desc: "Easy Dyes is a simple MC mod that adds a dye station that allows you to turn dyes into other dyes, making them easier to obtain in building-focused modpacks. (2025-)",
        links: [['https://curseforge.com/minecraft/mc-mods/easy-dyes', 'Curseforge page'], ['https://curseforge.com/minecraft/mc-mods/easy-dyes/files/', 'Curseforge download']],
        info: ["semiactive", "Semi-Active (2025-)", "minecraft", "Minecraft mod", 2],
    }),

    examplemod: new Game("Example Mod", "1.0", "examplemod.png", {
        desc: "An example mod for Minecraft 1.18.2. It does not really contain any content, but rather the generic mod structure and examples for blocks, items and recipes. Speeds up the process of starting a new mod. (2024)",
        links: [['https://github.com/schrottii/examplemod', 'Github page']],
        info: ["done", "Done (2024)", "minecraft", "Minecraft mod", 2],
    }),
}