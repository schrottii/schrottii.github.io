var commandDisplays = {
    sc2fmfr: document.getElementById("command1"),
    namemixer: document.getElementById("command2"),
    shgabb: document.getElementById("command3"),
    quotequiz: document.getElementById("command4"),
    mobile: document.getElementById("mobile"),
}

commandDisplays.sc2fmfr.innerHTML = `alert("After executing this, your save code should appear at the end of the page!");var FRCode=btoa(localStorage["ScrapFanmade"]);document.body.innerHTML+="\<br/>\<br/>\<br/>"+FRCode;`;
commandDisplays.namemixer.innerHTML = `alert("After executing this, your save code should appear at the end of the page! Import it in Name Mixer v1.6.1 or newer!");var BNMCode=btoa(unescape(encodeURIComponent(localStorage["NameMixer"])));document.body.innerHTML+="<br/><br/><br/>"+BNMCode;`;
commandDisplays.shgabb.innerHTML = `alert("After executing this, a rescue code that can be used to restore your save should appear at the end of the page!");var restoreMyShgabbCode=btoa(localStorage["shgabbClicker"]);document.body.innerHTML+="<br/><br/><br/>faCoDeFUVE"+restoreMyShgabbCode;`;
commandDisplays.quotequiz.innerHTML = `alert("After executing this, a rescue code that can be used to restore your save should appear at the end of the page!");var restoreMyQuiz=btoa(localStorage["QUOTEQUIZ"]);document.body.innerHTML+="<br/><br/><br/>faCoDeFUVE"+restoreMyQuiz;`;
commandDisplays.mobile.innerHTML = `javascript:(function () { var script = document.createElement('script'); script.src="https://cdn.jsdelivr.net/npm/eruda"; document.body.append(script); script.onload = function () { eruda.init(); } })();`;