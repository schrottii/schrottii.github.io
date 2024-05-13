// Game class
class Game {
    constructor(name, version, image, config){
        this.name = name;
        this.version = version;
        this.image = image;
        
        if (config != undefined) {
            this.config = config;

            if (this.config.desc != undefined) this.desc = this.config.desc;
            if (this.config.links != undefined) this.links = this.config.links;
            if (this.config.info != undefined) this.info = this.config.info;
        }
    }

    render(){
        let ren = `<div class="gameDiv"><div style="display: inline-block; width: 50%"><img class="gameImg" src="images/` + this.image
            + `" /></div><div style="display: inline-block; width: 50%"><h2>` + this.name + " v" + this.version + `</h2>`;
        if (this.links != undefined) {
            ren = ren + "<h3>";
            for (var lin in this.links) {
                ren = ren + `<button><a href="` + this.links[lin][0] + `"><b>` + this.links[lin][1] + `</b></a></button>  `;
            }
            ren = ren + `</h3></div>`;
        }
        if (this.info != undefined) {
            ren = ren + "<hr><img src='images/" + this.info[0] + ".png'> " + this.info[1] + "   <img src='images/genre.png'> " + this.info[2] + "   <img src='images/star.png'> " + this.info[3];
        }
        if (this.desc != undefined) {
            ren = ren + "<hr><br />" + this.desc;
        }
        ren = ren + "</div>";

        return ren;
    }
}

// Render Games
var gamesRender = document.getElementById("gamesRender");
function renderGames() {
    gamesRender.innerHTML = "";

    for (g in games) {
        gamesRender.innerHTML = gamesRender.innerHTML + games[g].render();
    }
}

// List of games, edit here
const games = {
    shgabbClicker: new Game("Shgabb Clicker", "2.4.1", "shgabb.png", {
        desc: "Shgabb Clicker is my newest idle game, based on one of my best friends, shgabb, and his mysterious name and pfp lore. The game contains several currencies, 100+ Achievements, 65+ Artifacts and more! Updates are released frequently. (2023-)",
        links: [['https://schrottii.github.io/shgabb-clicker/', 'Play Online'], ['https://shgabb-clicker.fandom.com/wiki/Shgabb_Clicker_Wiki', 'Wiki']],
        info: ["active", "Active (2023-)", "Idle", "4/5"],
    }),
    toastyBird: new Game("Toasty Bird", "1.1", "bird.png", {
        desc: "My newest game, and the beginning of a new era together with the games server, is finally here! It is a Flappy Bird-like retro arcade casual game. Hop through the pipes and get as many points as you can! (2024-)",
        links: [['https://schrottii.github.io/toasty-bird/', 'Play Online'], ['https://cdn.discordapp.com/attachments/1212720406155493406/1216502903804526602/InShot_20240310_223749830.mp4?ex=66009f9d&is=65ee2a9d&hm=150ebbf5e9924510b0fd696b03f5b1d3020d42848b5c271d9fd1e06c8d8b5d14&', 'Trailer']],
        info: ["active", "Active (2024-)", "Action", "3/5"],
    }),
    sc2fmfr: new Game("SC2FMFR", "3.3.1", "app-icon-large.png", {
        desc: "SC2FMFR is my huge mod of Scrap Clicker 2 Fanmade by <a href='https://veprogames.github.io/'>VeproGames</a>. It is by far the biggest and best mod of that game. This idle game has dozens of features, currencies, 275 achievements, 1000 barrels, and so much more! (2021-2023)",
        links: [['https://schrottii.github.io/sc2fmfr', 'Play Online'], ['https://discord.com/channels/330332759144792075/539500940185567247/1191122355888599130', 'APK Download (Toast)'], ['https://discord.gg/KgK3AgMfaC', 'FR and other mods server']],
        info: ["done", "Done (2021-2023)", "Idle", "4/5"],
    }),
    nameMixer: new Game("Barrel Name Mixer", "1.6.1", "canvas.png", {
        desc: "Not sure if this is more of a tool or a game, but here you can combine barrel names and images from Scrap Clicker 2. Lots of funny combinations. You can also save favorites and stuff. (2022-)",
        links: [['https://schrottii.github.io/barrelnames/', 'Play Online']],
        info: ["semiactive", "Semi-Active (2022-)", "Tools", "3/5"],
    }),
    quoteQuiz: new Game("QuoteQuiz", "1.2", "quotequiz.png", {
        desc: "QuoteQuiz, released in December 2023, is a quiz based on the quotes of the people of Toast and Scrap! Can you guessed who said these wise words? Can you get all trophies? 75+ questions, now with reworked, more graphical, design! (2023-)",
        links: [['https://schrottii.github.io/quotequiz/', 'Play Online']],
        info: ["active", "Active (2023-)", "Quiz", "3/5"],
    }),
    idleBar: new Game("Idle Bar", "1.6.9", "up_energy.png", {
        desc: "My first proper webgame, co-deved with someone else who offered and integrated access to a server, which granted this game unique features like ingame leaderboards and server-side saves. About 5 currencies, about 20 upgrades, about 50 trophies, Quests and more. The full version is not available anymore due to the lack of a server. However, since March 2024, a lite version without the server features is available! (2020-2022)",
        links: [['https://schrottii.github.io/idle-bar-lite/', 'Play Online (Lite)'], ['https://idle-bar.fandom.com/wiki/Idle_Bar_Wiki', 'Wiki']],
        info: ["done", "Done (2020-2022)", "Idle", "3/5"],
    }),
    combCalc: new Game("CombCalc", "1.0", "combcalc.png", {
        desc: "This tool shows you info regarding the Global Challenge in Scrap Clicker 2. (2024-)",
        links: [['https://schrottii.github.io/combcalc/', 'Use Online']],
        info: ["active", "Active (2024-)", "Tools", "2/5"],
    }),
}

renderGames();