var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegexbg = /^\/bg/;  botRegexDL = /^\/dl/;botRegexDP = /^\/dp/;botRegexSch = /^\/schedule/;
      botRegexHunter=/^\/hunter/;  botRegexkahn = /^\/kahn/;  botRegexRost = /^\/teams/; botcommish = /^\/commish/; botzez = /^\/zezinactive/;
      botRegexgf = /^\/gfinactive/;  botRegexfrenk = /^\/frenk/; botRegexCom = /^\/commands/; botRegexhose = /^\/hose.jpginactive/; botadv = /^\/adv/; botRegexcee = /^\/cbinactive/;
      bothelp = /^\/help/;  botStreams = /^\/streams/;  botm17 = /^\/m17/;  botRules = /^\/rules/;  botfrem = /^\/frem/;
      botalex = /^\/alexinactive/;  botbruh = /^\/bruh/;  botsuj = /^\/sujinactive/;  botsig = /^\/sig/;  botbob = /^\/bobross/;  botmusik = /^\/denk/;
  var teamAb = ["NE","NO","ARI","PHI","CLE","TEN","OAK","DAL","IND","SEA","CIN","PIT","JAC"
                ,"BAL","SD","DEN","MIN","ATL","KC","NYG","GB","DET","HOU","STL","CHI","CAR",
                "MIA","BUF","SF","WAS","NYJ","TB"]
  if(request.text && botRegexbg.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/thUZWBn.jpg");
    this.res.end();
  } 
  else if(request.text && botRegexDL.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/theml");
    this.res.end();
  } 
  else if(request.text && botRegexDP.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/watch?v=FyKWUTwSYAs");
    this.res.end();
  } 
  else if(request.text && botRegexHunter.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/EaAqlv1.jpg");
    this.res.end();
  }
  else if(request.text && botRegexRost.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://docs.google.com/document/d/1ypnpIGSpzR7Dnrco63lUpWN5l2npUlhQItxC4Eu5wE0/edit");
    this.res.end();
  } 
  else if(request.text && botRegexkahn.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/v8tQPfM.png");
    this.res.end();
  } 
  else if(request.text && botRegexSch.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/THEML/schedules");
    this.res.end();
  }
  else if(request.text && botRegexgf.test(request.text)) {
    this.res.writeHead(200);
    var req = request.text.substring(5,request.text.length);
    var rep = req.replace(/ /,"+");
    postMessage("Fuck EA");
    this.res.end();
  }  

  else if(request.text && botRegexfrenk.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/7LzOUXd.jpg");
    this.res.end();
  } 
  else if(request.text && botRegexCom.test(request.text)) {
    this.res.writeHead(200);
    postMessage("(/schedule,/teams,/dl,/rules,/streams)");
    this.res.end();
  } 
  else if(request.text && botRegexhose.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/6iGFc55.jpg");
    this.res.end();
  } 
  else if(request.text && botadv.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Adv pls ty");
    this.res.end();
  } 
  else if(request.text && botcommish.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/eXCWrd9.png");
    this.res.end();
  } 
  else if(request.text && botzez.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Zeks a real no-dick fag");
    this.res.end();
  }
  else if(request.text && botRegexcee.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/6PmT6Bj.jpg");
    this.res.end();
  }  
  else if(request.text && bothelp.test(request.text)) {
    this.res.writeHead(200);
    postMessage("No");
    this.res.end();
  }  
  else if(request.text && botStreams.test(request.text)) {
    this.res.writeHead(200);
    postMessage("(https://www.twitch.tv/crazyknightss [Erik],  https://www.twitch.tv/hardfluff [Liam],  https://www.twitch.tv/f00gazi  [TJ],  http://www.twitch.tv/steventwerkel [Steve], https://www.twitch.tv/bp323 [Sig], https://www.twitch.tv/tarheel2123 [Hunter])");
    this.res.end();
  }  
  else if(request.text && botm17.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://docs.google.com/spreadsheets/d/1bp1POvkMKF2TeVvzL4MjPyIGJkKXudTC7mIbRF61Pxc/edit?usp=sharing");
    this.res.end();
  }  
  else if(request.text && botRules.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://docs.google.com/document/d/1mBtjXKQ4Rb8Qcd0Q4bO7IbWLTJbQd4eEi7sA5lJTkQc/edit?usp=sharing");
    this.res.end();  
  }  
  else if(request.text && botfrem.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/nL8WVg8.png");
    this.res.end();
  }  
  else if(request.text && botalex.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/q3h4kdR.jpg");
    this.res.end();  
  }  
  else if(request.text && botbruh.test(request.text)) {
    this.res.writeHead(200);
    postMessage("mfw go bruhs");
    this.res.end();  
  }  
  else if(request.text && botsuj.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/1cV3gqX.jpg");
    this.res.end();
  }  
  else if(request.text && botsig.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/watch?v=Pfz4JViRkoA");
    this.res.end();  
  }  
  else if(request.text && botbob.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/xCRZ6om.jpg?1");
    this.res.end();  
  }  
  else if(request.text && botmusik.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/playlist?list=PLFPwGmnS_lyyVY5qjqZmHGbyr8doP0PH2");
    this.res.end();  
  }
  else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
}

function postMessage(response) {
  var botResponse,options, body, botReq;

  botResponse = response

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


exports.respond = respond;
