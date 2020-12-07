var haiku = [
    "scents of food waft by<br>and I am far and away<br>be back in thirty",
    "I see you ridin'<br>round town with the food I want<br>and I'm like, pho you",
    "thoughts of wagyu beef<br>how much does it cost again?<br>a salad it is",
    "soup or a salad<br>cannot decide which to get<br>both is the answer",
    "no milk once again<br>it's more likely than you think<br>at the Dairy Queen",
    "coffee is not a food<br>but got dayum is it good<br>second pot today",
    "Door Dash on the way<br>they have two more stops to make<br>icecream is melted",
    "trail mix is a treat<br>is that a raisin I see<br>that is not a treat",
    "another meeting<br>but the clock says it is noon<br>my sandwich awaits",
    "the microwave beeps<br>my mouth starts to salivate<br>is this Pavlov's Dog"
]


//haiku function
function newHaiku() {
    var randomNumber = Math.floor(Math.random() * (haiku.length));
    document.getElementById('haikuDisplay').innerHTML = haiku[randomNumber];
}

//copy function
function CopyToClipboard(containerid) {
    if (document.selection) {
        var range = document.body.createTextRange();
        range.moveToElementText(document.getElementById(containerid));
        range.select().createTextRange();
        document.execCommand("copy");
    } else if (window.getSelection) {
        var range = document.createRange();
        range.selectNode(document.getElementById(containerid));
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        document.execCommand("copy");
    }
}




