const express = require('express');
let app = express();
app.get('/home', function(req, rest){
    res.send("<html><body></body></html>");
});
app.listen(8000,function(){
    console.log("Porta sendo rodada");
});