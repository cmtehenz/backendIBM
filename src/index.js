const express = require('express');

const app = express();

app.get('/', (req, res) => {
  return res.json({ message: "tudo ok"})
});

var port = process.env.PORT || 3000
app.listen(port, function() {
    console.log("To view your app, open this link in your browser: http://localhost:" + port);
});