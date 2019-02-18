function TennisGame2(player1Name, player2Name) {
    this.Player1points = 0;
    this.Player2points = 0;

    this.Player1resultScore = "";
    this.Player2resultScore = "";

    this.player1Name = player1Name;
    this.player2Name = player2Name;
};

TennisGame2.prototype.AreTheyTied =function(Player1points,Player2points){
    return Player1points==Player2points && Player1points<5;
};

TennisGame2.prototype.getScoreTheyAreTied=function(Player1points,Player2points){
    return "Love-All";
};

TennisGame2.prototype.getScore = function() {
    var score = "";

    if (this.Player1points === this.Player2points && this.Player1points < 3) {
        if (this.Player1points === 0)
            score = "Love";
        if (this.Player1points === 1)
            score = "Fifteen";
        if (this.Player1points === 2)
            score = "Thirty";
        score += "-All";
    }
    if (this.Player1points === this.Player2points && this.Player1points > 2)
        score = "Deuce";

    if (this.Player1points > 0 && this.Player2points === 0) {
        if (this.Player1points === 1)
            this.Player1resultScore = "Fifteen";
        if (this.Player1points === 2)
            this.Player1resultScore = "Thirty";
        if (this.Player1points === 3)
            this.Player1resultScore = "Forty";

        this.Player2resultScore = "Love";
        score = this.Player1resultScore + "-" + this.Player2resultScore;
    }
    if (this.Player2points > 0 && this.Player1points === 0) {
        if (this.Player2points === 1)
            this.Player2resultScore = "Fifteen";
        if (this.Player2points === 2)
            this.Player2resultScore = "Thirty";
        if (this.Player2points === 3)
            this.Player2resultScore = "Forty";

        this.Player1resultScore = "Love";
        score = this.Player1resultScore + "-" + this.Player2resultScore;
    }

    if (this.Player1points > this.Player2points && this.Player1points < 4) {
        if (this.Player1points === 2)
            this.Player1resultScore = "Thirty";
        if (this.Player1points === 3)
            this.Player1resultScore = "Forty";
        if (this.Player2points === 1)
            this.Player2resultScore = "Fifteen";
        if (this.Player2points === 2)
            this.Player2resultScore = "Thirty";
        score = this.Player1resultScore + "-" + this.Player2resultScore;
    }
    if (this.Player2points > this.Player1points && this.Player2points < 4) {
        if (this.Player2points === 2)
            this.Player2resultScore = "Thirty";
        if (this.Player2points === 3)
            this.Player2resultScore = "Forty";
        if (this.Player1points === 1)
            this.Player1resultScore = "Fifteen";
        if (this.Player1points === 2)
            this.Player1resultScore = "Thirty";
        score = this.Player1resultScore + "-" + this.Player2resultScore;
    }

    if (this.Player1points > this.Player2points && this.Player2points >= 3) {
        score = "Advantage player1";
    }

    if (this.Player2points > this.Player1points && this.Player1points >= 3) {
        score = "Advantage player2";
    }

    if (this.Player1points >= 4 && this.Player2points >= 0 && (this.Player1points - this.Player2points) >= 2) {
        score = "Win for player1";
    }
    if (this.Player2points >= 4 && this.Player1points >= 0 && (this.Player2points - this.Player1points) >= 2) {
        score = "Win for player2";
    }
    return score;
};

TennisGame2.prototype.SetP1Score = function(number) {
    var i;
    for (i = 0; i < number; i++) {
        this.P1Score();
    }
};

TennisGame2.prototype.SetP2Score = function(number) {
    var i;
    for (i = 0; i < number; i++) {
        this.P2Score();
    }
};

TennisGame2.prototype.P1Score = function() {
    this.Player1points++;
};

TennisGame2.prototype.P2Score = function() {
    this.Player2points++;
};

TennisGame2.prototype.wonPoint = function(player) {
    if (player === "player1")
        this.P1Score();
    else
        this.P2Score();
};

if (typeof window === "undefined") {
    module.exports = TennisGame2;
}
