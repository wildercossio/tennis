function TennisGame2(player1Name, player2Name) {
    this.Player1score = 0;
    this.Player2score = 0;

    this.Player1resultScore = "";
    this.Player2resultScore = "";

    this.player1Name = player1Name;
    this.player2Name = player2Name;
};

TennisGame2.prototype.AreTheyTied =function(Player1score,Player2score){
    return Player1score==Player2score && Player1score<5;
};

TennisGame2.prototype.getScoreTheyAreTied=function(scoreOfBoth){
    var scoreResult="";
    switch(scoreOfBoth){
        case 0:
            scoreResult="Love-All";
            break;
        case 1:
            scoreResult="Fifteen-All";
            break;
        case 2:
            scoreResult="Thirty-All";
            break;
        default:
            scoreResult="Deuce";
            break;
    }
    return scoreResult;
};
TennisGame2.prototype.IsWinningPlayer1AndPlayer2isLove=function(Player1score,Player2score){
    return Player1score>0 && Player2score==0;
};

TennisGame2.prototype.getScorePlayer1isWinningAndPlayer2isLove=function(Player1score){
    var scoreResult="";
    switch(Player1score){
        case 1:
            scoreResult="Fifteen-Love";
            break;
        case 2:
            scoreResult="Thirty-Love";
            break;
        case 3:
            scoreResult="Forty-Love";
            break;
    }
    return scoreResult;
};

TennisGame2.prototype.IsWinningPlayer2AndPlayer1isLove=function(Player1score,Player2score){
    return Player2score>0 && Player1score==0;
};

TennisGame2.prototype.getScorePlayer2isWinningAndPlayer1isLove=function(Player2score){
    var scoreResult="";
    switch(Player2score){
        case 1:
            scoreResult="Love-Fifteen";
            break;
        case 2:
            scoreResult="Love-Thirty";
            break;
        case 3:
            scoreResult="Love-Forty";
            break;
    }
    return scoreResult;
};

TennisGame2.prototype.IsWinningPlayer1AndPlayer2isFifteen=function(Player1score,Player2score){
    return Player1score>1 && Player2score==1;
};

TennisGame2.prototype.getScorePlayer1isWinningAndPlayer2isFifteen=function(Player1score){
    var scoreResult="";
    switch(Player1score){
        case 1:
            scoreResult="Thirty-Fifteen";
            break;
        case 2:
            scoreResult="Forty-Fifteen";
            break;
    }
    return scoreResult;
};


TennisGame2.prototype.IsWinningPlayer2AndPlayer1isFifteen=function(Player1score,Player2score){
    return Player2score>1 && Player1score==1;
};

TennisGame2.prototype.getScorePlayer2isWinningAndPlayer1isFifteen=function(Player2score){
    var scoreResult="";
    switch(Player2score){
        case 1:
            scoreResult="Fifteen-Thirty";
            break;
        case 2:
            scoreResult="Fifteen-Forty";
            break;
    }
    return scoreResult;
};
TennisGame2.prototype.IsWinningPlayer2AndPlayer1isThirty=function(Player1score,Player2score){
    return true;
};

//-------------------------------------------------------------------------------------
TennisGame2.prototype.getScore = function() {
    var score = "";

    if (this.Player1score === this.Player2score && this.Player1score < 3) {
        if (this.Player1score === 0)
            score = "Love";
        if (this.Player1score === 1)
            score = "Fifteen";
        if (this.Player1score === 2)
            score = "Thirty";
        score += "-All";
    }
    if (this.Player1score === this.Player2score && this.Player1score > 2)
        score = "Deuce";

    if (this.Player1score > 0 && this.Player2score === 0) {
        if (this.Player1score === 1)
            this.Player1resultScore = "Fifteen";
        if (this.Player1score === 2)
            this.Player1resultScore = "Thirty";
        if (this.Player1score === 3)
            this.Player1resultScore = "Forty";

        this.Player2resultScore = "Love";
        score = this.Player1resultScore + "-" + this.Player2resultScore;
    }
    if (this.Player2score > 0 && this.Player1score === 0) {
        if (this.Player2score === 1)
            this.Player2resultScore = "Fifteen";
        if (this.Player2score === 2)
            this.Player2resultScore = "Thirty";
        if (this.Player2score === 3)
            this.Player2resultScore = "Forty";

        this.Player1resultScore = "Love";
        score = this.Player1resultScore + "-" + this.Player2resultScore;
    }

    if (this.Player1score > this.Player2score && this.Player1score < 4) {
        if (this.Player1score === 2)
            this.Player1resultScore = "Thirty";
        if (this.Player1score === 3)
            this.Player1resultScore = "Forty";
        if (this.Player2score === 1)
            this.Player2resultScore = "Fifteen";
        if (this.Player2score === 2)
            this.Player2resultScore = "Thirty";
        score = this.Player1resultScore + "-" + this.Player2resultScore;
    }
    if (this.Player2score > this.Player1score && this.Player2score < 4) {
        if (this.Player2score === 2)
            this.Player2resultScore = "Thirty";
        if (this.Player2score === 3)
            this.Player2resultScore = "Forty";
        if (this.Player1score === 1)
            this.Player1resultScore = "Fifteen";
        if (this.Player1score === 2)
            this.Player1resultScore = "Thirty";
        score = this.Player1resultScore + "-" + this.Player2resultScore;
    }

    if (this.Player1score > this.Player2score && this.Player2score >= 3) {
        score = "Advantage player1";
    }

    if (this.Player2score > this.Player1score && this.Player1score >= 3) {
        score = "Advantage player2";
    }

    if (this.Player1score >= 4 && this.Player2score >= 0 && (this.Player1score - this.Player2score) >= 2) {
        score = "Win for player1";
    }
    if (this.Player2score >= 4 && this.Player1score >= 0 && (this.Player2score - this.Player1score) >= 2) {
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
    this.Player1score++;
};

TennisGame2.prototype.P2Score = function() {
    this.Player2score++;
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
