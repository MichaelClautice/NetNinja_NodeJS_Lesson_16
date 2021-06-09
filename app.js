// Michael Clautice, Richmond, VA
// The Net Ninja - NodeJS Tutorial for Beginners
// Lesson 16 - Pipes
//---------
// WHAT THIS APP DOES------
// Lesson 16 app uses a server to responds to a client URL req 
// th client request is URL 127.0.0.1:3000

/* this app will use the fs.createReadStream() mthd to stream content from a txt file so it requires th nodeJS File System core mod fs */
// resp is St F prayer in browser 

// REQUIRE THE CORE MODULES------
// srvr reqs http mod
var http = require('http');
// app reqs fs mod to stream from a txt file
var fs = require('fs');

// CREATE THE SERVER------
// create & assign a srvr
// utilize NodeJS's req & res objs
var server = http.createServer(function(req, res){
// con.log a test mssg
       console.log('request was made: ' + req.url);
// create th resonse header
// res header info also available in dev tools
       res.writeHead(200, {'Content-type': 'text/plain'});
// read & assign a stream of St F content into a variable
       var myReadStream = fs.createReadStream(__dirname + '/readStFrancis.txt', 'utf8');   
    
// PIPE RESPONSE INTO --------
// myReadStream.pipe(res) takes th place of:
// the on() event listener mthd
// the res.end() mthd
// 
       myReadStream.pipe(res);
});

// LISTEN FOR THE PORT NUMBER------
server.listen(3000, '127.0.0.1');
console.log('\nyo dawgs, now listening to port 3000\n');