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
        }
    }

    render(){
        let ren = `<div class="gameDiv"> <img class="gameImg" src="images/` + this.image + `" /><h2>` + this.name + " v" + this.version + `</h2>`;
        if (this.links != undefined) {
            ren = ren + "<h3>";
            for (var lin in this.links) {
                ren = ren + `<a href="` + this.links[lin][0] + `">[` + this.links[lin][1] + `]</a>  `;
            }
            ren = ren + "</h3>";
        }
        if (this.desc != undefined) {
            ren = ren + this.desc;
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
        gamesRender.innerHTML = gamesRender.innerHTML + "<br />" + games[g].render();
    }
}

// List of games, edit here
const games = {
    shgabbClicker: new Game("Shgabb Clicker", "2.0.1", "shgabb.png", {
        desc: "Shgabb Clicker is my newest idle game, based on one of my best friends, shgabb, and his mysterious name and pfp lore. The game contains several currencies, over 50 achievements, over 40 artifacts and more! Updates are released frequently.",
        links: [['https://shgabb-clicker.vercel.app/', 'Play Online'], ['https://shgabb-clicker.fandom.com/wiki/Shgabb_Clicker_Wiki', 'Wiki']],
    }),
    sc2fmfr: new Game("SC2FMFR", "3.3", "app-icon-large.png", {
        desc: "SC2FMFR is my huge mod of Scrap Clicker 2 Fanmade by <a href='https://veprogames.github.io/'>VeproGames</a>. It is by far the biggest and best mod of that game. This idle game has dozens of features, currencies, 275 achievements, 1000 barrels, and so much more!",
        links: [['https://sc2fmfr.vercel.app/', 'Play Online'], ['https://discord.gg/KgK3AgMfaC', 'FR and other mods server']],
    }),
    nameMixer: new Game("Barrel Name Mixer", "1.6", "canvas.png", {
        desc: "Not sure if this is more of a tool or a game, but here you can combine barrel names and images from Scrap Clicker 2. Lots of funny combinations. You can also save favorites and stuff.",
        links: [['https://barrelnames.vercel.app/', 'Play Online']],
    }),
    newGame: new Game("Coming soon...", "0", "shgabb.png"),
}

renderGames();