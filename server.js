const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })


const path = require('path');
const helmet = require("helmet");
const cors = require("cors");

var moment = require('moment');
var bodyParser = require('body-parser');


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





  server.post('/retrieveIsMobile', function(req, res) {
    console.log("Trying retrieve is mobile ")
    try {


      console.log("Calling is mobile ")
      var MobileDetect = require('mobile-detect'),
        md = new MobileDetect(req.headers['user-agent']);

  console.log("This is the is mobile "+md.mobile())

  res.send(md.mobile())

  }
  catch(err) {
  console.log("This is the err "+err)
  }


  });





  server.listen(process.env.PORT || 3000)

})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})
