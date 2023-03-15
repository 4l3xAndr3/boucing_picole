/******** BOUNCE ********/
var bodyWidth = window.innerWidth;
var bodyHeight = window.innerHeight;

var randPosX;
var randPosY;

function randLoc() {
    randPosX = Math.floor((Math.random() * (bodyWidth)));
    randPosY = Math.floor((Math.random() * (bodyHeight)));
}

function randLocGirlz() {
    randPosX = Math.floor((Math.random() * (bodyWidth / 2)));
    randPosY = Math.floor((Math.random() * (bodyHeight / 2)));
}

var bouncingDiv = [];
$(".bounce").each(function() { bouncingDiv.push($(this)); });
for (var i = 0; i < bouncingDiv.length; i++) {
    randLoc();
    $(bouncingDiv[i]).css('left', randPosX);
    $(bouncingDiv[i]).css('top', randPosY);
    $(bouncingDiv[i]).DVDBounce({
        inc: 1
    });
}

var bouncingTeamDiv = [];
$(".bouncingTeam").each(function() { bouncingTeamDiv.push($(this)); });
for (var i = 0; i < bouncingTeamDiv.length; i++) {
    randLocGirlz();
    $(bouncingTeamDiv[i]).css('left', randPosX);
    $(bouncingTeamDiv[i]).css('top', randPosY);
    $(bouncingTeamDiv[i]).DVDBounce({
        inc: 0
    });
}

/******** GIRLZ ********/
var randomGirlz = [];
$(".girlz").each(function() { randomGirlz.push($(this)); });
for (var i = 0; i < randomGirlz.length; i++) {
    randLocGirlz();
    $(randomGirlz[i]).css('left', randPosX);
    $(randomGirlz[i]).css('top', randPosY);
}
/******** END GIRLZ ********/
/******** END BOUNCE ********/