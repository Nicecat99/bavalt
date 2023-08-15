const code = `
  <head>
    <meta charset = "utf-8">
    <title>Open Bavalt</title>
    <style>
      a {
         color: white;
      }
      
      .size {
        width: 599px;
        height: 400px;
        position: fixed;
        left: 0px;
        top: 0px;
      }
      
      body {
         margin: 0;
         padding: 0;
         color: white;
         font-family: sans-serif;
         background: rgb(20, 20, 20);
      }
    </style>
    <link rel = "icon" href = "https://nicecat99.github.io/favicon.ico"></link>
  </head>
  <body>
    <noscript><center><h1>Sorry, Your Browser does not support JavaScript</h1></center></noscript>
    <h1><center><a href="javascript:launch();">Launch Bavalt</a></center></h1>
    <center>Make sure popup is enabled</center>
    <script>
      function launch(){
        window.open("https://nicecat99.github.io/bavalt/window.html", "Bavalt", "width=599 height=400 resizable=no popup");
      }
    </script>
  </body>


`;
const Server = require('express');
const app = new Server();
app.get('/', (req,res) => {
    res.send(code);
});
app.listen(1212);
