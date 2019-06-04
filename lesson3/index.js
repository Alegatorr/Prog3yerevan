var express = require("express");
var app = express();

app.get("/", function(req, res){
   res.send("<h1>Hello worlsd</h1>");
});
app.get("/google/search/:searchValue", function(req, res){
   var val = req.params.searchValue;
   res.redirect("http://google.com/search?q="+val);
});
app.listen(3000, function(){
   console.log("Example is running on port 3000");
});
