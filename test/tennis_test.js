var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();

import TennisGame2 from '../tennisgame2.js';

describe('TennisGame2', function() {
   let game;
   let allScores = [
       [0, 0, "Love-All"],
       [1, 1, "Fifteen-All"],
       [2, 2, "Thirty-All"],
       [3, 3, "Deuce"],
       [4, 4, "Deuce"],

       [1, 0, "Fifteen-Love"],
       [0, 1, "Love-Fifteen"],
       [2, 0, "Thirty-Love"],
       [0, 2, "Love-Thirty"],
       [3, 0, "Forty-Love"],
       [0, 3, "Love-Forty"],
       [4, 0, "Win for player1"],
       [0, 4, "Win for player2"],

       [2, 1, "Thirty-Fifteen"],
       [1, 2, "Fifteen-Thirty"],
       [3, 1, "Forty-Fifteen"],
       [1, 3, "Fifteen-Forty"],
       [4, 1, "Win for player1"],
       [1, 4, "Win for player2"],

       [3, 2, "Forty-Thirty"],
       [2, 3, "Thirty-Forty"],
       [4, 2, "Win for player1"],
       [2, 4, "Win for player2"],

       [4, 3, "Advantage player1"],//falta
       [3, 4, "Advantage player2"],//falta
       [5, 4, "Advantage player1"],//falta
       [4, 5, "Advantage player2"],//falta
       [15, 14, "Advantage player1"],//falta
       [14, 15, "Advantage player2"],//falta

       [6, 4, "Win for player1"],//falta
       [4, 6, "Win for player2"],//falta
       [16, 14, "Win for player1"],//falta
       [14, 16, "Win for player2"]//falta
   ];

   it('deberia devolver verdadero si los puntajes de los jugadores estan en empate',function(){
        var game=new TennisGame2("Juanito","Pepito");
        expect(game.AreTheyTied(4,4)).equal(true);
   });

   it('deberia devolver el literal del Score cuando ambos jugadores empatan',function(){
        var game=new TennisGame2("Juanito","Pepito");
        var expectedScore=["Love-All","Fifteen-All","Thirty-All","Deuce","Deuce"];
        var position=0;
        for(var scoreOfBoth=0;scoreOfBoth<5;scoreOfBoth++){
            expect(game.getScoreTheyAreTied(scoreOfBoth)).equal(expectedScore[position]);
            position++;
        }
   });
   
   it('deberia devolver verdadero si Player1 va ganando y Player2 se mantiene en 0(Love)',function(){
        var game=new TennisGame2("Juanito","Pepito");
        var Player1score=1;
        var Player2score=0;
        expect(game.IsWinningPlayer1AndPlayer2isLove(Player1score,Player2score)).equal(true);
   });

   it('deberia devolver el literal del Score cuando el Player1 va ganando y el Player2 se mantiene en (0)Love',function(){
        var game=new TennisGame2("Juanito","Pepito");
        var expectedScore=["Fifteen-Love","Thirty-Love","Forty-Love"];
        var position=0;
        for(var scorePlayer1=1;scorePlayer1<4;scorePlayer1++){
            expect(game.getScorePlayer1isWinningAndPlayer2isLove(scorePlayer1)).equal(expectedScore[position]);
            position++;
        }
   });

   it('deberia devolver verdadero si Player2 va ganando y Player1 se mantiene en 0(Love)',function(){
        var game=new TennisGame2("Juanito","Pepito");
        var Player1score=0;
        var Player2score=1;
        expect(game.IsWinningPlayer2AndPlayer1isLove(Player1score,Player2score)).equal(true);
   });

   it('deberia devolver el literal del Score cuando el Player2 va ganando y el Player1 se mantiene en Love(0)',function(){
        var game=new TennisGame2("Juanito","Pepito");
        var expectedScore=["Love-Fifteen","Love-Thirty","Love-Forty"];
        var position=0;
        for(var scorePlayer2=1;scorePlayer2<4;scorePlayer2++){
            expect(game.getScorePlayer2isWinningAndPlayer1isLove(scorePlayer2)).equal(expectedScore[position]);
            position++;
        }
   });

   it('deberia devolver verdadero si Player1 va ganando y Player2 se mantiene en 1(Fifteen)',function(){
        var game=new TennisGame2("Juanito","Pepito");
        var Player1score=2;
        var Player2score=1;
        expect(game.IsWinningPlayer1AndPlayer2isFifteen(Player1score,Player2score)).equal(true);
    });

   it('deberia devolver el literal del Score cuando el Player1 va ganando y el Player2 se mantiene en 1(Fifteen)',function(){
        var game=new TennisGame2("Juanito","Pepito");
        var expectedScore=["Thirty-Fifteen","Forty-Fifteen"];
        var position=0;
        for(var scorePlayer1=1;scorePlayer1<2;scorePlayer1++){
            expect(game.getScorePlayer1isWinningAndPlayer2isFifteen(scorePlayer1)).equal(expectedScore[position]);
            position++;
        }
   }); 

   it('deberia devolver verdadero si Player2 va ganando y Player1 se mantiene en 1(Fifteen)',function(){
        var game=new TennisGame2("Juanito","Pepito");
        var Player1score=1;
        var Player2score=2;
        expect(game.IsWinningPlayer2AndPlayer1isFifteen(Player1score,Player2score)).equal(true);
   });

   it('deberia devolver el literal del Score cuando el Player2 va ganando y el Player1 se mantiene en Fifteen(1)',function(){
        var game=new TennisGame2("Juanito","Pepito");
        var expectedScore=["Fifteen-Thirty","Fifteen-Forty"];
        var position=0;
        for(var scorePlayer2=1;scorePlayer2<2;scorePlayer2++){
            expect(game.getScorePlayer2isWinningAndPlayer1isFifteen(scorePlayer2)).equal(expectedScore[position]);
            position++;
        }
   });

   it('deberia devolver verdadero si Player1 esta en 3(Forty) y Player2 esta en 2(Thrirty)',function(){
        var game=new TennisGame2("Juanito","Pepito");
        var Player1score=3;
        var Player2score=2;
        expect(game.IsWinningPlayer2AndPlayer1isThirty(Player1score,Player2score)).equal(true);
   });

   it('deberia devolver verdadero si Player2 esta en 3(Forty) y Player1 esta en 2(Thrirty)',function(){
        var game=new TennisGame2("Juanito","Pepito");
        var Player1score=2;
        var Player2score=3;
        expect(game.IsWinningPlayer1AndPlayer2isThirty(Player1score,Player2score)).equal(true);
   });
   it('deberia devolver verdadero si Player1 gano el juego',function(){
        var game=new TennisGame2("Juanito","Pepito");
        var Player1score=4;
        var Player2score=0;
        expect(game.IsTheWinnerPlayer1(Player1score,Player2score)).equal(true);
   });
   
   it('deberia devolver verdadero si Player2 gano el juego',function(){
        var game=new TennisGame2("Juanito","Pepito");
        var Player1score=0;
        var Player2score=4;
        expect(game.IsTheWinnerPlayer2(Player1score,Player2score)).equal(true);
   });
//-----------------------------------------------------------------------------------------------------------

   
