var name = prompt("Welcome to GC mini golf! What is your name?");

var cap = name.charAt(0).toUpperCase() + name.slice(1);

var playCount = prompt("Hi, " + cap + "! Would you like to play 3 or 6 holes?");

var total = 0;

var holeNumber = 1;

var totalPar = 0

for (var i = 0; i < playCount; i++) {
    var putts = Number(prompt("How many putts for hole " + holeNumber++ + "? (par is 3)"));
    total += putts;
}

if (total > 9 && playCount == 3) {
    totalPar = total - 9;
    console.log("Nice try, " + cap + ". Your total par was: +" + totalPar);
} else if (total < 9 && playCount == 3) {
    totalPar = 9 - total;
    console.log("Great job, " + cap + "! Your total par was: -" + totalPar);
} else if (total === 9 && playCount == 3) {
    console.log("Good game, " + cap + ". Your total par was: " + totalPar);
}

if (total > 18 && playCount == 6) {
    totalPar = total - 18;
    console.log("Nice try, " + cap + ". Your total par was: +" + totalPar);
} else if (total < 18 && playCount == 6) {
    totalPar = 18 - total;
    console.log("Great job, " + cap + "! Your total par was: -" + totalPar);
} else if (total === 18 && playCount == 6) {
    console.log("Good game, " + cap + ". Your total par was: " + totalPar);
}