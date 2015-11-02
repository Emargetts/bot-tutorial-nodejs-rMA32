var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegexbg = /^\/bg/;  botRegexDL = /^\/dl/;botRegexDP = /^\/dp/;botRegexErik = /^\/erip/;
      botRegexHunter=/^\/hunter/;  botRegextm = /^\/team/i;  botRegexSC = /^\/SDL/i; botWilly = /^\/willy/; botzez = /^\/zez/;
      botRegexgf = /^\/gf/;  botRegexTw = /^\/twitch/i; botRegexSb = /^\/sub/; botRegexhose = /^\/hose.jpg/; botRegexWk = /^\/users/; 
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
  else if(request.text && botRegextm.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/lul/team/"+request.text.substring(5,8)+"/depthchart");
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

  else if(request.text && botRegexTw.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.twitch.tv/"+request.text.substring(8,request.text.length));
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
    postMessage(".mfw");
    this.res.end();
  } 
  else if(request.text && botzez.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Go Browns");
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
