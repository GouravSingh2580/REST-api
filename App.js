var express = require("express");
var app = express();

app.get("/url", (req, res, next) => {
    res.json(["keep","the","door","open","3-inches"]);
   });

app.listen(4000, () => {
 console.log("Server running on port 3000");
});
