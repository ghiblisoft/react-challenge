const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })


const path = require('path');
const helmet = require("helmet");
const cors = require("cors");

var moment = require('moment');
var bodyParser = require('body-parser');

const axios = require('axios')

const Router = require('./routes')


const handle = Router.getRequestHandler(app)



app.prepare()
.then(() => {
  const server = express()

server.get('*', (req, res) => handle(req, res))

  server.use(bodyParser.json());
     server.use(bodyParser.urlencoded({ extended: true }));
     server.use(helmet());
     server.use(cors());
     server.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})


server.post('/retrievePlayers', function(req, res) {
  console.log("Trying retrieve players ")
  try {


    console.log("Calling retrieve players in each team ")

    axios.get('http://localhost:3008/teams')
      .then(function (response) {
    //    console.log("This is players slot 0 name in teams api call"+players[0].name)
        console.log("response "+response);
      /*  console.log("respone data "+response.data)
        console.log("This is the team name "+response.data[0].name)
          console.log("This is the players "+response.data[0].players)

          console.log("This is the team name slot 1"+response.data[1].name)
            console.log("This is the players slot 1"+response.data[1].players)*/

        console.log("This is the teams object keys of response.data[0] "+Object.keys(response.data[0]))

//  that.setState({teams:response.data})
var playersObject={}
  for (var i=0;i<response.data.length;i++)
  {
var players=response.data[i].players
for(var j=0 ;j<players.length;j++)
{

  playersObject[players[j].toString()]=response.data[i].name

}


  //console.log("This is the id "+response.data[i].id)
  /*if ( response.data[i].players.includes(1))
    {
    console.log("players includes 1")
    }
*/



}
console.log("This is object key 1 "+playersObject["1"])

res.send(playersObject)

      })
      .catch(function (error) {
        console.log(error);
      });





}
catch(err) {
console.log("This is the err "+err)
}


});


  server.post('/retrieveIsMobile', function(req, res) {
    console.log("Trying retrieve is mobile ")
    try {


      console.log("Calling the is mobile ")
      var MobileDetect = require('mobile-detect'),
        md = new MobileDetect(req.headers['user-agent']);

  console.log("This is the is mobile "+md.mobile())

  res.send(md.mobile())

  }
  catch(err) {
  console.log("This is the err "+err)
  }


  });

  server.post('/retrieveFrontPageNew', function(req, res) {
      console.log("Calling the retrieve front page ")
    //  var city=req.body.city
    //  var country=req.body.country

    console.log("This is the type in retrieve front page "+req.body.type)
    try{
    var type=req.body.type
    var location=req.body.location
      const mongoose = require("mongoose");
        const ListedItem = mongoose.model("ListedItem");
  console.log("This is the location "+ location)
  //    var query = ListedItem.findOne({'category': location}).sort({"timestamp":-1})

  ListedItem.findOne({'category': location}).sort({timestamp: -1}).exec(function(err, doc) {

    console.log("This is docs "+doc)
      /*   docs.forEach(function(doc) {
           console.log("This is the doc id "+doc._id)
           userMap[doc._id] = doc;
         });
    */
         res.send(doc);

   });

  /*
      Shirts.find({'category': location}, function(err, docs) {
       var userMap = {};
       var urls=[]

  console.log("This is docs "+docs)

       res.send(docs);
     });
  */



  }catch(error)
  {
  console.log("This is the error in retrieve front page "+error)
  }
  })





  server.listen(process.env.PORT || 3000)

})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})
