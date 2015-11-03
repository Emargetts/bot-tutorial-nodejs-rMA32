var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegexbg = /^\/bg/;  botRegexDL = /^\/dl/;botRegexDP = /^\/dp/;botRegexErik = /^\/erip/;
      botRegexHunter=/^\/hunter/;  botRegexkahn = /^\/kahn/;  botRegexSC = /^\/SDL/i; botWilly = /^\/willy/; botzez = /^\/zez/;
      botRegexgf = /^\/gf/;  botRegexfrenk = /^\/frenk/; botRegexSb = /^\/sub/; botRegexhose = /^\/hose.jpg/; botRegexWk = /^\/users/; botRegexcee = /^\/cb/;
      bothelp = /^\/help/;  botdavid = /^\/david/;  botham = /^\/ham/;  botconnor = /^\/connor/;  botfrem = /^\/frem/;
      botalex = /^\/alex/;  botbruh = /^\/bruh/;  botdil = /^\/dil/;
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
    postMessage("http://daddyleagues.com/lul");
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
  else if(request.text && botRegexErik.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/eIoeHgP.jpg");
    this.res.end();
  } 
  else if(request.text && botRegexkahn.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/v8tQPfM.png");
    this.res.end();
  } 
  else if(request.text && botRegexSC.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/lul/team/"+request.text.substring(5,8)+"/schedule");
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
    postMessage("http://i.groupme.com/852x568.gif.5e8ba1219aff46ee893025e002005e90.large");
    this.res.end();
  } 
  else if(request.text && botRegexSb.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.reddit.com/r/lockupleague");
    this.res.end();
  } 
  else if(request.text && botRegexhose.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/6iGFc55.jpg");
    this.res.end();
  } 
  else if(request.text && botRegexWk.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://docs.google.com/spreadsheets/d/1Eujxou2T1ABJbjXVlK97OllHBUCANBvvG2S0Zh2Mwys/edit?usp=sharing");
    this.res.end();
  } 
  else if(request.text && botWilly.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Fuck Willy");
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
  else if(request.text && botdavid.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/eL0zpq5.jpg");
    this.res.end();
  }  
  else if(request.text && botham.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/SrELNnp.png");
    this.res.end();
  }  
  else if(request.text && botconnor.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/bfW1YE0.jpg");
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
