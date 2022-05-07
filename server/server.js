const express = require('express');
const app = express();

const PORT= 8080;
app.listen(PORT);

console.log('server listening on ' + PORT);

app.use(express.static('public'));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/getcode', (req,res) =>{
    console.log('get code request from '+ req.ip);
    res.send("code request not implemented yet");
})
