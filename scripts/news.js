// News class
class News {
    constructor(id, header, text) {
        this.id = id;
        this.header = header;
        this.text = text;
    }

    render() {
        let ren = `<div class="gameDiv">#` + this.id + `: <h2>` + this.header + `</h2>`;
        ren = ren + this.text + "</div>";

        return ren;
    }
}

// Render News
var newsRender = document.getElementById("newsRender");
function renderNews() {
    newsRender.innerHTML = "";

    for (n = news.length - 1; n > news.length - 4; n -= 1) {
        newsRender.innerHTML = newsRender.innerHTML + news[n].render();
    }
}

const news = [
    new News(1, "Host issues solved!", "My games are now hosted via Github. All links on this site have been updated."),
    new News(2, "Shgabb Clicker v2.1.2", "Some balancing, GS changes and many nice small changes!"),
    new News(3, "Website v1.0", "My website is no longer WIP! Now with news, about me and more!"),
    new News(4, "SC2FMFR v3.3.1", "December 31st - A new SC2FMFR update is out now! Just 2 hours before the new year begins in Europe... I hope you enjoy this update as much as I do, it's one of my favorite FR updates! It adds 2 cool new settings, makes tree upgrades cheaper, fixes bugs and more!"),
]

renderNews();