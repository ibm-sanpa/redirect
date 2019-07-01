const express = require('express')
const fs = require('fs');
const app = express()
const port = process.env.PORT || 3000

var content = fs.readFileSync("./mapping.json", "utf-8");

app.get('/:path', function(req, res) {
    console.log(req.params.path);
    var path = req.params.path;
    if(path){
        var url = ""
        var mapping = JSON.parse(content);
        console.log(mapping[path]);
        res.redirect(mapping[path]);
    } else {
        res.send('Hello World!')
    }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
