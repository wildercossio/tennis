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
    return Player1score==3 && Player2score==2;
};

TennisGame2.prototype.IsWinningPlayer1AndPlayer2isThirty=function(Player1score,Player2score){
    return Player2score==3 && Player1score==2;
};

TennisGame2.prototype.IsTheWinnerPlayer1=function(Player1score,Player2score){
    return Player1score==4 && Player2score>=0 && Player2score<=2;
};
TennisGame2.prototype.IsTheWinnerPlayer2=function(Player1score,Player2score){
    return Player2score==4 && Player1score>=0 && Player1score<=2;
};
//-------------------------------------------------------------------------------------
