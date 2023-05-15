
var express = require('express');
var app = express();

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});



app.get('/', function (req, res) {
    const sdk = require('api')('@render-api/v1.0#dnrc1ulf088q9j');

    sdk.auth('rnd_cKoCovncp6mQ0NvY3qunVoDWIlTs');
    sdk.getServices({limit: '20'})
      .then(({ data }) => {res.send(data);})
      .catch(err => console.error(err));
  
    
});