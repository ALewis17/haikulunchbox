var haiku = [
    "scents of food waft by<br>and I am far and away<br>be back in thirty",
    "I see you ridin'<br>round town with the food I want<br>and I'm like, pho you",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten"
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




