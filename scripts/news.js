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

    for (n = news.length - 1; n > news.length - 8; n -= 1) {
        newsRender.innerHTML = newsRender.innerHTML + news[n].render();
    }
}

// News can be website updates, game updates, or other announcements
// They are NOT complete, especially prior to October 2024. I often forget to announce new updates here, especially minor ones
// The news channel in the Discord server is far more complete and contains more detail

const news = [
    new News(1, "Host issues solved!", "My games are now hosted via Github. All links on this site have been updated."),
    new News(2, "Shgabb Clicker v2.1.2", "Some balancing, GS changes and many nice small changes!"),
    new News(3, "Website v1.0", "My website is no longer WIP! Now with news, about me and more!"),
    new News(4, "SC2FMFR v3.3.1", "December 31st - A new SC2FMFR update is out now! Just 2 hours before the new year begins in Europe... I hope you enjoy this update as much as I do, it's one of my favorite FR updates! It adds 2 cool new settings, makes tree upgrades cheaper, fixes bugs and more!"),
    new News(5, "Shgabb Clicker v2.2 - v2.2.4", "January 26th - I should really update this more often... at the beginning of the month, Shgabb v2.2, v2.2.1, v2.2.2 and v2.2.3 were released. Adding the new feature Challenges and more. Now, after 14(!) days, v2.2.4 is finally out, reworking Auto Shgabb."),
    new News(6, "Website v1.1", "January 26th - I have expanded the About Me section, making the text longer, and the list of languages I know prettier."),
    new News(7, "New Server!", "February 29th - Toast's sibling has finally been born! In this new Discord Server, my games are the focus. The very thing this site is about! Talk about Shgabb Clicker & the other games there. https://discord.gg/CbBeJXKUrk"),
    new News(8, "Website v1.2", "February 29th - Added the new games server! Added Idle Bar to the games list. Also increased width of the boxes, added images for the servers, moved restoring saves to somewhere else and more"),
    new News(9, "Idle Bar Lite", "March 2nd - Idle Bar is back! Albeit in a limited version. This version does not have server features such as leaderboards, server-side saving or tabs, but this is the only way I could make it bring it back (for now, at least). Its entry in the games section has been updated!"),
    new News(10, "Toasty Bird", "March 10th - A new game, Toasty Bird, is out now! You can find it in the games list. It's my first new game of this new era, with the website, the games server... I have lots of ideas for new games and cool updates, so stay tuned! And make sure to play Toasty Bird!"),
    new News(11, "Website v1.3", "March 10th - This website update adds another row to each game, where you can see whether its in active development, semi-active, or done, its genre(s) and how many stars I give it from 1 to 5! This update also adds the new game Toasty Bird."),
    new News(12, "Toasty Bird v1.2", "May 2nd - This update adds SKINS, a SHOP, improved patch notes and more!"),
    new News(13, "CombCalc", "May 13th - This is not a new game. It's a tool. Whether the name mixer is a game or a tool is debatable, but this is definitely a tool. An app. And it's out now! Here you can see whether the Global Challenge in Scrap 2 is active, plus more info. Later it will also have calculators."),
    new News(14, "New updates", "June 23rd - Sorry for the lack of news! There have been many new updates. CombCalc v1.1, Name Mixer v1.7, Shgabb Clicker's latest version is v2.5.3 & more!"),
    new News(15, "Fisecraft is out now!", "July 23rd - These news are a bit delayed, but oh well... Big announcement! The past few weeks I've finally started learning another programming language: Java. It took a while to learn, create and test, but my first MC mod is out now: Fisecraft! This is just the beginning. It adds a bit of everything: a new armor and tool set, several building blocks, a new crop, some food, some teleportation items and more. ~22 new blocks and ~27 new items. You can find its links at the bottom of the games section, where it now has an entry."),
    new News(16, "Website v1.4", "July 23rd - This website update makes the background less distracting, increases readability of texts, adds Fisecraft, Java to my list of languages, cool pages mini section, and a navigation bar at the top."),
    new News(17, "Toasty Bird v1.3 & Shgabb Clicker v2.9", "August 2nd - First news of the month... Toasty Bird v1.3 & Shgabb Clicker v2.9 are out now! The former adds Skills, a completely new inventory screen, and more. The latter adds new Upgrades, backgrounds and many improvements. Enjoy!"),
    new News(18, "Statement about Ads", "October 14th - Some of you may have noticed ads on my own website (schrottii.github.io) and in Shgabb Clicker. They were never announced - that is because they were simply tests. Enough time has passed and enough variations have been trialed to come to a conclusion. Those ads are not worth it yet, for such a small playerbase, and thus they will be removed from the game, and most from the website as well. I want to keep one so I can estimate the amount of visitors it gets."),
    new News(19, "Money, Pricing, Donations", "October 14th - I have been making these games, art, etc. for years now, and have barely earned anything from it. This year has been awful for me financially, and I probably deserve to earn at least something for my work. I have decided to go for a Donation-based monetization model, meaning my games keep being free, no subscriptions, no masses of ads. If you feel like I deserve to be paid for my work you can do that now: <a href='https://ko-fi.com/schrottii'>link to my ko-fi</a>"),
    new News(20, "SC2FMFR v3.4", "October 14th - It is the first update in almost a year, and the first one since the creation of my server. It improves gameplay on wide screens / landscape, improves performance, fixes bugs, balances Beam costs and more. The game is more polished now."),
    new News(21, "MC 1.18.2 modding template", "October 15th - My second MC modding related, uhm, project, is out now! It's a template I'll use for future mods, and anyone else can use it too. It's open source and easy to use, including a little tutorial and step-by-step instructions. <a href='https://github.com/schrottii/examplemod'>link to the repo here</a>"),
    new News(22, "SC2FMFR on galaxy", "October 17th - On Monday, SC2FMFR was updated to version 3.4. Now, the game is also available on the idle game website galaxy! This lets more people find and play the game, and potentially branch out to my other games or my server. It has already accumulated 14 ❤️, 266 plays, 161 hours of playtime, 4.5 stars and several comments - this is some of the most attention my games have ever received, and it seems like people are enjoying it. It's encouraging me to do more idle stuff, and step up my game. Thank you! <a href='https://galaxy.click/play/474'>SC2FMFR on galaxy link</a>"),
    new News(23, "CombCalc v1.2", "October 17th - CombCalc has been updated to version 1.2! Interestingly, this version's new calculator is not related to the Global Challenge or any tokens: It's the More Scrap Calc - used to calculate the appropriate level for the More Scrap Book upgrade. It's annoying to do this formula by hand, so having it integrated here will be useful for many people. This has been kind of planned from the start: CombCalc will be used for all kinds of SC2 calcs, not just GC stuff."),
    new News(24, "Website v1.5", "October 18th - The biggest website update is here! I have overhauled the design: introducing a good-looking new top navigation with a moon button to disable it, a clean color palette, better readability, new fonts, and more. I also rewrote or changed most texts and game images, and added a donate button and flags of the non-programming languages that I speak. Organization has been improved and auto ads have been removed. Enjoy!")
]

renderNews();