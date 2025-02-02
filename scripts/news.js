﻿// News class
class News {
    constructor(id, header, text, button) {
        this.id = id;
        this.header = header;
        this.text = text;
        this.button = button;
    }

    render() {
        let ren = `<div class="gameDiv">#` + this.id + `: <h2>` + this.header + `</h2>`;
        ren = ren + this.text;
        if (this.button != undefined) ren = ren + "<br /><button onclick='window.open(`" + this.button[0] + "`)'>" + this.button[1] + "</button>";

        ren = ren + "</div>";
        return ren;
    }
}

// Render News
var newsPage = 0;
const NEWS_AMOUNT = 5;
var newsRender = document.getElementById("newsRender");

function renderNews() {
    newsRender.innerHTML = "";

    newsRender.innerHTML = newsRender.innerHTML + "<button onclick='newerNews()'>Newer</button>";
    newsRender.innerHTML = newsRender.innerHTML + "<button onclick='olderNews()'>Older</button>";
    
    for (n = news.length - 1 - (newsPage * NEWS_AMOUNT); n >= news.length - NEWS_AMOUNT - (newsPage * NEWS_AMOUNT); n -= 1) {
        if (n == -1) break;
        newsRender.innerHTML = newsRender.innerHTML + news[n].render();
    }
}

function newerNews() {
    if (newsPage > 0) newsPage--;
    renderNews();
}

function olderNews() {
    if (news.length >= (1 + newsPage) * NEWS_AMOUNT) newsPage++;
    renderNews();
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
    new News(7, "New Server!", "February 29th - Toast's sibling has finally been born! In this new Discord Server, my games are the focus. The very thing this site is about! Talk about Shgabb Clicker & the other games there.", ["https://discord.gg/CbBeJXKUrk", "Server link"]),
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
    new News(19, "Money, Pricing, Donations", "October 14th - I have been making these games, art, etc. for years now, and have barely earned anything from it. This year has been awful for me financially, and I probably deserve to earn at least something for my work. I have decided to go for a Donation-based monetization model, meaning my games keep being free, no subscriptions, no masses of ads. If you feel like I deserve to be paid for my work you can do that now: ", ["https://ko-fi.com/schrottii", "link to my ko-fi"]),
    new News(20, "SC2FMFR v3.4", "October 14th - It is the first update in almost a year, and the first one since the creation of my server. It improves gameplay on wide screens / landscape, improves performance, fixes bugs, balances Beam costs and more. The game is more polished now."),
    new News(21, "MC 1.18.2 modding template", "October 15th - My second MC modding related, uhm, project, is out now! It's a template I'll use for future mods, and anyone else can use it too. It's open source and easy to use, including a little tutorial and step-by-step instructions. ", ["https://github.com/schrottii/examplemod", "link to the repo here"]),
    new News(22, "SC2FMFR on galaxy", "October 17th - On Monday, SC2FMFR was updated to version 3.4. Now, the game is also available on the idle game website galaxy! This lets more people find and play the game, and potentially branch out to my other games or my server. It has already accumulated 14 ❤️, 266 plays, 161 hours of playtime, 4.5 stars and several comments - this is some of the most attention my games have ever received, and it seems like people are enjoying it. It's encouraging me to do more idle stuff, and step up my game. Thank you!", ["https://galaxy.click/play/474", "SC2FMFR on galaxy"]),
    new News(23, "CombCalc v1.2", "October 17th - CombCalc has been updated to version 1.2! Interestingly, this version's new calculator is not related to the Global Challenge or any tokens: It's the More Scrap Calc - used to calculate the appropriate level for the More Scrap Book upgrade. It's annoying to do this formula by hand, so having it integrated here will be useful for many people. This has been kind of planned from the start: CombCalc will be used for all kinds of SC2 calcs, not just GC stuff."),
    new News(24, "Website v1.5", "October 18th - The biggest website update is here! I have overhauled the design: introducing a good-looking new top navigation with a moon button to disable it, a clean color palette, better readability, new fonts, and more. I also rewrote or changed most texts and game images, and added a donate button and flags of the non-programming languages that I speak. Organization has been improved and auto ads have been removed. Enjoy!"),
    new News(25, "Shgabb Clicker v3.1", "October 19th - v3.1 Grateful Gems is out now! This update unexpectedly BUFFS Gems! There is now a Gem storage, a beautiful new Gem image, 18 beautiful fish images... and Gem Artifacts have been changed! They are no longer capped at level 3 and have been rebalanced. Enjoy your Gemflation!"),
    new News(26, "WGGJ Release", "October 20th - Probably uninteresting for most of you, but: I have completed and published my first own framework! WGGJ (WebGame Graphics Javascript) is a simple framework making it easier to generate Canvas graphics and manage objects. I mostly made this for myself, but if anyone out there has JS experience and wants to make a webgame, this is a good tool. It originated in QuoteQuiz(about one year ago) and similar systems were implemented in Toasty Bird and Shgabb Clicker's minigames, however, they were not on the same level, harder to update and slightly different. Now I just have to integrate all 3 into the WGGJ framework and then they are built the same way, and become easier to update and easier to expand. Making another game becomes easier as well, and overall it's just cleaner, faster and more professional. Having created your own framework is quite the achievement.", ["https://github.com/schrottii/wggj", "WGGJ on Github"]),
    new News(27, "Shgabb Clicker v3.1.1", "October 21st - Update v3.1.1 is out now! It makes Shgabb Clicker the first game to uses the WGGJ framework, adds more info to Fishgang and a humongous rebalancing for legendary Artifacts in the game."),
    new News(28, "Website v1.6, Toasty Bird v1.3.2, QuoteQuiz v1.4.1", "October 22nd - Today's a productive day! New updates for Toasty Bird and QuoteQuiz are out now, finishing the WGGJ trilogy and adding new skins / making answers more readable. The website has been updated to v1.6 - not as big as the previous update, but noteworthy regardless. The example mod and WGGJ have been added to the list, with their own images. The news section now allows you to see older views! Previously, only the latest 3 (pre-1.5) / 7 (1.5) / 5 (1.6, now) news were visible. But now you can also go back to older ones. 5 news are visible per page. Also, news can now have a button - rather than it being a part of the text.", ["https://cdn.discordapp.com/attachments/1212720406155493406/1298264879991488532/132donate.png?ex=6718eee3&is=67179d63&hm=3cfc293825f660b256164adde13604af6cecbdb1e2e158b3bda73f80ebcf4fa5&", "Example button"]),
    new News(29, "Shgabb Clicker v3.2 / Shgabb The Witch", "October 30th - Shgabb The Witch is out now! Introducing the event of the same name, this might be one of my favorite updates ever, and my favorite event for sure. The wait & delays were worth it. There are 2 event currencies, 5 PFPs, 4 banners, 5 Achievements and boosts: x6 lore pages, x6 lore progress (wisps/candles) and x6 Bags. But not only that! It is also the first event to add new lore pages: you can find a total of 10 by collecting the wisp-like candles, and learn about the story of Shgabb The Witch. (Which is probably my favorite storywriting I have ever done, and it is deeply personal.) Artifacts can be randomly cursed during the event, causing them to gain an extra level! Use these cursed Artifacts to earn Witch Shgabb, which can be spent to create spells of four categories: bad, good, holy and cosmetic. Over a dozen different effects. Beautiful art all around. I hope you love this one as much as I do."),
    new News(30, "Rain Collector is out now!", "November 2nd - My new idle game Rain Collector has been released! For now, it has 2 currencies, 5 upgrades, music and several settings - future updates will add more currencies, prestige, minigames, items and more. The game is similar to Scrap Collector / SC2FMFR's beams, focusing on the collecting of things that fall from the sky. Feedback from FR's galaxy has been taken into account to create a game that suits the modern idle player's taste: such as an auto collect feature that is unlocked early. Enjoy!", ["https://schrottii.github.io/rain-collector/", "Play Rain Collector"]),
    new News(31, "Shgabb Clicker v3.2.1", "November 8th - v3.2.1 is out now! This update brings a handful of changes to the new event, including in-game descriptions, seeing the latest spell effect directly, much faster witch gains & more! The event has also been extended by a week, it now lasts until November 17th. See the patch notes for details."),
    new News(32, "SC2FMFR 3.5 & Success", "November 8th - SC2FMFR has reached 100 favorites and a total play count of 10,000 on galaxy! That's sooo much! By far the most attention any of my games have ever gotten! Thank you sooo much! Reward: v3.5 is out now! The update includes balancing in the early game, beams and supernova, improvements to Unlocks, reworked (and easier to understand) Gifts layout, a GS boost from Achievements, a donate button, lots of crash fixes and bug fixes, and more! See the patch notes for all the details. Enjoy!"),
    new News(33, "Rain Collector v1.1 & v1.1.1", "November 20th - Rain Collector v1.1, the Raingold Update, is out now! It adds a new feature: prestige, a new currency: Raingold, a new font, collect effects and a lot more. Happy collecting!"),
    new News(34, "Shgabb Clicker v3.3: Framed Pages", "November 21st - v3.3, the Framed Pages update, is out now! This update focuses on the Shbook and Player Profile: it adds the new type of customization Frames, makes the cosmetic collection more organized, adds more random buttons, makes lore easier to understand, easier to unlock and more!"),
    new News(35, "QuoteQuiz v1.4.2", "November 22nd - QuoteQuiz v1.4.2 is out now, exactly one month after its previous update! It's another small one as the game isn't exactly popular, but it makes it easier to play and easier on the eyes again. There is now a time bar showing you the time remaining in the current round, and a few graphical improvements. Oh and quotes can no longer get cut off mid-word."),
    new News(36, "Fisecraft v1.2 (Confiseg Update)", "November 24th - Fisecraft v1.2 Confiseg Update is out now! This update adds a config, letting you tweak several settings for the mod. It also balances previous additions, adds the Rootguardian trophy block, and two Endfise blocks."),
    new News(37, "Fisecraft on Modrinth", "November 25th - After popular request, Fisecraft is now available on Modrinth too! Previously, it was only available on Curseforge, which apparently isn't people's primary choice anymore. Who would've thought things changed since 2015?! Oh and Fisecraft is now open source.", ["https://modrinth.com/mod/fisecraft", "Fisecraft on Modrinth"]),
    new News(38, "Rain Collector v1.2: EASNIR Update", "November 29th - Rain Collector v1.2, the EASNIR Update, is out now! It adds so much... swiping instead of clicking directly, Achievements, Stats, number stuff, easier Raingold collecting and more. Go play it now."),
    new News(39, "Rain Collector v1.2.1: 2 EAS 4 NIR", "November 30th - Rain Collector v1.2.1, also known by the incredible name of 2 EAS 4 NIR, is out now! It improves Raingold in various ways, re-balances Water Coins a bit, improves holding and improves the display of upgrade prices a looot."),
    new News(40, "QuoteQuiz v1.5", "November 30th - QuoteQuiz v1.5 is out now, the final update of the October/November period! It's fairly big. It changes how users / characters are handled, their names are now capitalized, but most importantly... IMAGES!!! Awesome portraits by the sides. NEW FEATURE: Modes!!! In practice mode you have more time, can't win/lose trophies and see the correct answers! Also 25 new quotes and two new settings. If you haven't played QuoteQuiz in a while, now is the time to return. Gameplay looks better and is much easier on the eyes, the images are cool, and now you got practice mode. A lot has changed since the early versions. Happy quizzing!"),
    new News(41, "Shgabb Clicker v3.3.1", "December 1st - v3.3.1 is out now! This update adds 5 new Artifacts, 2 new lore pages, Boost Filters and more. Boost Filters, as seen in the image, let you easily filter Artifacts by their effect. This can be faster/easier than using the Artifact search, although the two can be combined."),
    new News(42, "WGGJ v1.1", "December 2nd - WGGJ has been updated to version 1.1! Some of this was already implemented in Rain Collector, which was a bit ahead of the curve, but this update takes it further. Key update content: clickables removed, holding added, improved text scaling and improved performance"),
    new News(43, "CombCalc v1.3", "December 3rd - CombCalc has been updated to v1.3! There is a new calculator, and it's really cool: the Token Cost Calc. This can be used in 2 ways. There have been other improvements as well."),
    new News(44, "SC2FMFR v3.5.1", "December 4th - v3.5.1 is out now! This update makes Hyper Buy available much, much earlier - at e42 Magnets, instead of post-Supernova. There is also a lot of balancing for Tree Upgrade costs, improvements for the Unlocks list, bug fixes and more. See all changes in the patch notes."),
    new News(45, "QuoteQuiz v1.5.1", "December 5th - QuoteQuiz v1.5.1 is out now. It changes the ground image (you know, those funny squares at the top and bottom), with the goal of making them less distracting. It also improves the mode selection a bit, and more."),
    new News(46, "Website v1.7", "December 6th - The website has been updated... there are now filter options for the games/apps list. Yes, it was renamed from My Games to My Games & Apps. They have been categorized into 3 types: Game, Tool and Minecraft. Filters are available for these 3 types, as well as for the 3 activity states. FR has been moved from done to semi-active. C# added to my languages. Star ratings are now shown with five stars rather than one star and a number, and the genre and star images have been changed. There is a button to hide the filters as well. Hope you had a nice Friday."),
    new News(47, "Toasty Bird v1.4 & v1.4.1", "December 8th - Toasty Bird v1.4 Stop The Cats is out now, and it adds 4 cheap cat skins, Pause button (P can also be pressed), A Death Effect & more. v1.4.1 brings something that some people have been waiting for: Hz no longer affect the speed the game runs at. Also, you see how many coins you collect in a run, the bird falls faster & some minor changes."),
    new News(48, "Shgabb Clicker v3.4: Global Freeze", "December 9th - Update v3.4: Global Freeze is out now! In a few days, the Christmas Event will be back with its Gifts and 3 PFPs... but there's more! One extra PFP, 3 Banners and 3 Frames - first time you can earn new Frames! But there's also a nice load of content before the event begins: a new Améliorer upgrade, several minor improvements and more..."),
    new News(49, "Shgabb Clicker on galaxy", "December 10th - Yesterday, the game was updated to version 3.4. Now, the game is available on the idle game website galaxy.click! This lets more people find and play the game, and potentially branch out to my other games or this server. It was just approved and doesn't have any ratings, likes or comments yet - but it could go viral just like how SC2FMFR did! If you prefer playing there, you can do so now.", ["https://galaxy.click/play/488", "Shgabb on galaxy"]),
    new News(50, "Reply to the Galaxy feedback", "December 11th - Shgabb Clicker has been on Galaxy for almost a day now, and it's sitting at a bad score of 2.6 stars. The people over there are not enjoying it at all. Whether they are valid, or constructive, or understanding the game, is debatable, and some of them got rude at times - but overall, this does not have to be a bad thing. This place is a bubble of clicker oldheads, branching out to a larger audience lets us see what modern idle/clicker players want. Things have changed a lot in the past few years. Rain Collector was made with their idea of what an idle game should be in mind - but Shgabb Clicker was not. And maybe the core concepts are more niche, some people don't like active gameplay at all - but that's not who our audience is - it is an active clicker/incremental, and that is the audience that should enjoy the game. Their main complaint is the repetitive and straightforward of the beginning of the game, which can be easy to forget when you've been building with Artifacts for months. The next update(s) will focus on the earlygame and making the game more beginner friendly, while keeping it reasonable, and fun for the lategame. I hope that people who are interested in the game, but turned off by the slow start, will give it another chance after the changes, and that its rating will rise. On a more personal, vulnerable note, reading the overwhelmingly negative response has been heart - breaking.The past few weeks have been rough for me socially, and I'm not feeling well today. But more importantly, Shgabb Clicker is my favorite of my games here, it's almost like a child.But I understand it.I will improve the game, even if I harm myself a bit in the process. - Schrottii"),
    new News(51, "One Update Every Day (OUED)", "December 11th - Maybe some have already noticed it: this month has a different update schedule. (Technically, it's the only one to have a fixed schedule at all.) I set a challenge for myself: at least one update, or other thing (like new emojis or galaxy release), every day, for the entire month. I'm not sure why, but I thought it would be a fun idea and fitting for the moment. Like an advent calendar, maybe. Will be a bit difficult around Christmas, but I'll try. It's very impressive, when other devs can't even do one update every month. Enjoy the frequent updates!"),
    new News(52, "Shgabb Clicker v3.4.1: Global2", "December 11th - Following the controversial release on galaxy... and many complaints about the sluggish earlygame... v3.4.1 AKA Global2 is out now, and it's here to address exactly that. The earlygame is much faster and more fun now. Lots of earlygame changes. For example, More Shgabb now costs 2/lvl instead of 5/lvl (base). You can get to the first prestige in 15 minutes now. But there's also changes for everyone, like 2 new Achievements, or Bomblike 2 being unlocked at 10k instead of 12k. Enjoy!"),
    new News(53, "Toasty Bird v1.4.2 & Shgabb Clicker v3.4.2: Globbbal Frrreeze", "December 13th - Two minor updates have been released. v1.4.2 changes the design of the buttons - very cool - and does some other small improvements. v3.4.2 makes the game easier to understand for new players."),
    new News(54, "Rain Collector v1.3: Bubble Freeze", "December 14th - It is finally here - the bees are hiding, the temperatures are falling, and from the sky you can see it falling... BUBBLES?!  This update adds the Currency Selection - essential for the future of the game - here you can select which currency falls! There are two new currencies unlocked along with it.Bubbles are your next step after Raindrops.You need 2000 Raingold. For two weeks, you can enjoy the Christmas Event! During the event, a special currency is available: Snowflakes! They can be spent on two upgrades that affect every single thing that falls. Happy collecting! "),
    new News(55, "Rain Collector v1.3.1 & Shgabb Clicker v3.4.3: Earthwide Coldization", "December 18th - Again, two very minor updates in a row. v1.3.1 allows you to disable Snowflake upgrades and tweaks some stuff. v3.4.3 changes how the game gets loaded."),
    new News(56, "Barrel Name Mixer v1.8", "December 19th - Barrel Name Mixer has finally received a new update! It improves the design, cleans up the info/credits section, adds 48 new barrels, a list of all patch notes, and more!"),
    new News(57, "Website v1.8", "December 20th - This is a fairly small update. Direct links to the files that contain all patch notes have been added for the games that have such files - they were maybe not easy to find before. Now, most games have multiple buttons, which is good. Links for Shgabb on galaxy and WGGJ's readme have been added as well. The 3 buttons at the top now fit into one row on mobile, and my name, Schrottii's Games, now switches between multiple colors. Filters are now hidden by default, search bar is fixed & some small stuff."),
    new News(58, "Rain Collector v1.4: Merry Glowmas", "December 25th - This update adds the prestige version of Bubbles: Glowbles. They are similar to Raingold, but on top of their Bubble boost, they can also be spent on two upgrades that affect Raindrops too. There's also a bunch of other improvements including new backgrounds, seeing how much you get from a collect, accessing Snowflake upgrades after the event ends, and Water Coins for Bubbles! Merry Christmas!"),
    new News(59, "Shgabb Clicker v3.4.4: Set Cold", "December 26th - The next v3.4.x update is here! It brings a huge bunch of changes to settings: new design, descriptions, 5 new settings and more! There are also changes to the Christmas Event, including 4x chance for cosmetics in Gifts! Settings look soooo much different now... go check it out!"),
    new News(60, "Rain Collector v1.4.1", "December 27th - v1.4.1 is out now. It adds two new Water Coin upgrades, moves them away from other upgrades, fixes a Water Coin bug & you can now get them from Bubbles. Also a new design for buttons, better collect effects & more."),
    new News(61, "CombCalc v1.4 & WGGJ v1.1.1", "December 28th - CombCalc has been updated to version v1.4! This update adds another new calculator: the Barrel Production Calc. This lets you calculate how much scrap you get from a certain barrel based on your barrel 1 production. Very easy to use, and fairly accurate (decimals can be a bit off). If you want to know the base production, insert 1 for the Circle Blue production. /// WGGJ has received a minor update. It does not affect the framework itself, but instead overhauls the visual example / demonstration, which was quite lacking before, but shows off some basic elements now. The documentation has been extended as well."),
    new News(62, "2024 is over", "December 31st - December is over, 2024 is over. Usually, a period in this server is 2 months, but this December was a period by itself. Only 1 month. And it was able to keep up with all others: I set myself the challenge of averaging one update/thing per day... the One Update Every Day (OUED) Challenge... AND THE CHALLENGE HAS BEEN BEATEN!!! 31/31! It's an insane pace, and proves that I can be a quantity beast. And the updates weren't too bad either. Now, let's look at how I was financially rewarded for all this hard work and even overworking myself on some days -- this month I have earned an amazing 2€! That's so much wow!!! Totally not a big drop from the previous months for some reason. 0.13% of the minimum wage! "),
    new News(63, "Shgabb Clicker v3.4.5 & v3.4.6", "January 4th - The next v3.4.x update is here! It brings the UI and design changes that people have been suggesting. Four background images have been changed to get rid of the green - and bring in the blues! There's also a new setting, bug fixes and a bunch of design stuff - find every detail in the patch notes! // On January 6th the second year of the Anniversary Event begins with a free special Banner for everyone! New stuff in the event, special cosmetics and more"),
    new News(64, "Rain Collector v1.5", "January 20th - It took way too long, but... Update v1.5 is finally here! It adds ITEMS, a big new feature, unlocked at 1000 total Glowbles. The image and patch notes tell you everything you need to know - get daily items, boost several currencies, find a good strategy! I'm sorry that it took so long, but I was busy with other things, like playing games, taking care of myself and others. And the update itself took an unusual amount of work too, with me scrapping half of it halfway through. But it was worth it. Enjoy! :)"),
    new News(65, "Website v1.9", "January 23rd - NEW FEATURE on the website: Settings! These are saved, similarly to the settings in games. Two settings have been added: Direct Play and Local Dir. <br /> Direct Play: This lets you start games quickly from my website. It makes big PLAY buttons appear. There are three types: play online (on their individual github-hosted websites), play on galaxy (if available), and play locally. For that one, you need to use the other setting as well. It's for nerds. <br /> Local Dir: Use this to make local Direct Play work. Enter the path to where you downloaded my games. It only works if you are accessing the website locally too, or allowing insecure JavaScript. If you don't play that way, don't worry about it. <br /> Other changes: changed design of the top navigation, buttons there are easy to click now. Little play arrows have been added for some of the play buttons. Section for settings added at the bottom."),
    new News(66, "Shgabb Clicker v3.4.7: B-Cold", "January 24th - A new update is finally here! It brings a handful of design changes to the top part and minigames, a full list of HMS unlocks in the Shbook, and more! Also, the lore boost is now unlocked from the start, and that upgrade makes it exponential instead."),
    new News(67, "WGGJ v1.2 & v1.2.1", "January 29th & 31st -  WGGJ v1.2 is out now, and it's massive. It adds a whole new element: Containers. These can be used to create scrollable elements on both axis (think of the scrolling stuff in SC2FMFR). There's also a couple of positive name changes, things to avoid issues, onUp, better returns, scene-related and debug variables, and more. WGGJ v1.2.1 expands the new container feature. Containers can now have limits (borders), seperate for all four directions. Always scrolling infinitely would be silly in some cases - think of an upgrade list for example! For anyone using WGGJ, be aware of the Compability notes at the end of the patch notes. For normal people - all you need to know is that this is impressive work and lets the games be even better!"),
    new News(68, "Shgabb Clicker v3.4.8: Winter Lunar", "February 1st - We're directly starting the month with the final v3.4.x update, and it's not small: Winter Lunar gives us the second year of the Lunar New Year Event, with new cosmetics to get (and it's easier than before), a new Achievement and more. And there are a whopping FIFTEEN new lore pages - 5 belated pages for the Christmas and Anniversary Events each, which you will be able to get later ~ and 5 pages for Lunar Year 2, which starts on February 4th! There's also other new Achievements, finally new Quotes again... and more!"),
    new News(69, "Rain Collector v1.5.1", "February 2nd - Following the large v1.5 update that added Items, v1.5.1 is out now! It adds the first WGGJ Containers. Stats are now scrollable, and there were some stats that were hidden until now because there wasn't enough space. You can also now find the patch notes in-game, which are also scrollable."),
    //new News(, "", ""),
]

renderNews();